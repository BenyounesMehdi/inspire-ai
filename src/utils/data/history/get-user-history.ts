"server only";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUserHisotory = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  try {
    const data = await prisma.content.findMany({
      where: {
        userId: user.id,
      },
    });
    return data;
  } catch {
    throw new Error("Failed to get the history.");
  }
};
