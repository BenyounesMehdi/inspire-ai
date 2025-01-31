"server only";

import prisma from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const getUser = async () => {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  if (!response) return null;

  try {
    const currentUser = await prisma.user.findUnique({
      where: {
        id: response.id,
      },
    });
    return currentUser;
  } catch {
    throw new Error("User not found");
  }
};
