"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { stripe } from "../stripe/stripe";
import { redirect } from "next/navigation";

export const createSubscription = async (formData: FormData): Promise<void> => {
  const userId = formData.get("userId");

  if (!userId) redirect("/");

  let stripeUserId = await prisma.user.findUnique({
    where: {
      id: userId as string,
    },
    select: {
      customerId: true,
      email: true,
      firstName: true,
    },
  });

  if (!stripeUserId?.customerId) {
    const stripeCustomer = await stripe.customers.create({
      email: stripeUserId?.email,
      name: stripeUserId?.firstName,
    });

    stripeUserId = await prisma.user.update({
      where: {
        id: userId as string,
      },
      data: {
        customerId: stripeCustomer.id,
      },
    });
  }

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
        ? "https://inspire-ai-tech.vercel.app/payment/cancelled "
        : "http://localhost:3000/payment/cancelled",
  });
  return redirect(session.url as string);
};
