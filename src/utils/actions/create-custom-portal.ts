"use server";

import { stripe } from "../stripe/stripe";
import { getUserSubscription } from "../data/subscription/get-user-subscription";
import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const createCustomPortal = async (): Promise<void> => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response) return redirect("/");

  const userSubscription = await getUserSubscription();

  const session = await stripe.billingPortal.sessions.create({
    customer: userSubscription?.user?.customerId as string,
    return_url:
      process.env.NODE_ENV === "production"
        ? "https://inspire-ai-tech.vercel.app/dashboard/subscription"
        : "http://localhost:3000/dashboard/subscription",
  });

  return redirect(session.url);
};
