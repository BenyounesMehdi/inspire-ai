"use server";

import prisma from "@/lib/db";
import { stripe } from "../stripe/stripe";
import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const createSubscription = async (): Promise<void> => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);
  if (!response || !response.id) {
    console.error("No user found!");
    redirect("/");
  }

  console.log("User ID:", response.id);

  let stripeUserId = await prisma.user.findUnique({
    where: {
      id: response.id as string,
    },
    select: {
      customerId: true,
      email: true,
      firstName: true,
    },
  });
  console.log("database url: ", process.env.DATABASE_URL);
  console.log("direct url: ", process.env.DATABASE_URL);
  console.log("Stripe user data from DB:", stripeUserId);

  if (!stripeUserId?.customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: stripeUserId?.email,
      name: stripeUserId?.firstName,
    });

    stripeUserId = await prisma.user.update({
      where: {
        id: response.id as string,
      },
      data: {
        customerId: stripeCustomer.id,
      },
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      customer: stripeUserId.customerId as string,
      mode: "subscription",
      billing_address_collection: "auto",
      payment_method_types: ["card"],
      customer_update: {
        address: "auto",
        name: "auto",
      },
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url:
        process.env.NODE_ENV === "production"
          ? "https://inspire-ai-tech.vercel.app/payment/success"
          : "http://localhost:3000/payment/success",
      cancel_url:
        process.env.NODE_ENV === "production"
          ? "https://inspire-ai-tech.vercel.app/payment/cancelled"
          : "http://localhost:3000/payment/cancelled",
    });
    return redirect(session.url as string);
  } catch (error) {
    console.error("Subscription creation error:", error);
    throw error;
  }
};
