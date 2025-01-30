"server only";

import prisma from "@/lib/db";
import { unstable_cache as nextCache } from "next/cache";

export const getUserHistory = nextCache(
  async (userId: string) => {
    if (!userId) return null;

    try {
      const data = await prisma.content.findMany({
        where: {
          userId: userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      return data;
    } catch {
      throw new Error("Failed to get the history.");
    }
  },
  ["user-history"],
  { revalidate: 86400, tags: ["user-history"] }
);
