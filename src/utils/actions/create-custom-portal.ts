"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { stripe } from "../stripe/stripe";
import { getUserSubscription } from "../data/subscription/get-user-subscription";
import { redirect } from "next/navigation";

export const createCustomPortal = async (): Promise<void> => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/");

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
