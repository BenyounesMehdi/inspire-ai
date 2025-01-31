"server-only";

import prisma from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const getUserSubscription = async () => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response.id) return null;

  const subscription = await prisma.subscription.findUnique({
    where: {
      userId: response.id,
    },
    select: {
      status: true,
      user: {
        select: {
          customerId: true,
        },
      },
    },
  });

  return subscription;
};
