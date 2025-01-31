import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    throw new Error("Something went wrong");
  }

  try {
    // Check if the user already exists
    let dbUser = await prisma.user.findUnique({
      where: { id: user.id },
    });

    // If the user doesn't exist, create them
    if (!dbUser) {
      console.log("User not found, creating new user...");
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          profileImage:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    // Redirect after successful user creation
    const redirectUrl =
      process.env.NODE_ENV === "production"
        ? "https://inspire-ai-tech.vercel.app"
        : "http://localhost:3000";

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error("Error in create-user route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
