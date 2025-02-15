"use server";

import prisma from "@/lib/db";

export const createUser = async (
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  image: string
) => {
  try {
    await prisma.user.create({
      data: {
        id: id,
        email: email ?? "",
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        profileImage: image ?? `https://avatar.vercel.sh/${firstName}`,
      },
    });
  } catch {
    throw new Error("Error");
  }
};
