"server-only";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUserSubscription = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  const subscription = await prisma.subscription.findUnique({
    where: {
      userId: user.id,
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
