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
  });

  if (!subscription) return false;
  return true;
};
