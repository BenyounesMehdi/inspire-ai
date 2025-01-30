"server only";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUser = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    return currentUser;
  } catch {
    throw new Error("User not found");
  }
};
