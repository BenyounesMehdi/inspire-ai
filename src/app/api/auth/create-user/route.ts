import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  console.log("✅ [API] create-user route hit");

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    console.error("❌ [ERROR] User not found");
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  console.log(`🔍 [INFO] Checking if user exists: ${user.id}`);

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!dbUser) {
    try {
      console.log("🆕 [INFO] Creating new user in database");

      await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? "",
          lastName: user.family_name ?? "",
          email: user.email ?? "",
          profileImage:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
          customerId: null, // Add this explicitly
        },
      });

      console.log("✅ [SUCCESS] User created successfully");
    } catch (error) {
      console.error("❌ [DB ERROR] Failed to create user:", error);

      return NextResponse.json({ status: 500 });
    }
  } else {
    console.log("ℹ️ [INFO] User already exists");
  }

  const redirectUrl =
    process.env.NODE_ENV === "production"
      ? "https://inspire-ai-tech.vercel.app"
      : "http://localhost:3000";

  console.log(`🔄 [INFO] Redirecting to: ${redirectUrl}`);

  return NextResponse.redirect(redirectUrl);
}
