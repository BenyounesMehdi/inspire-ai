// import prisma from "@/lib/db";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();

//   if (!user || !user.id) {
//     throw new Error("Something went wrong");
//   }

//   const dbUser = await prisma.user.findUnique({
//     where: {
//       id: user.id,
//     },
//   });

//   if (!dbUser) {
//     await prisma.user.create({
//       data: {
//         id: user.id,
//         firstName: user.given_name ?? "",
//         lastName: user.family_name ?? "",
//         email: user.email ?? "",
//         profileImage:
//           user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
//       },
//     });
//   }

//   const redirectUrl =
//     process.env.NODE_ENV === "production"
//       ? "https://inspire-ai-tech.vercel.app"
//       : "http://localhost:3000";

//   return NextResponse.redirect(redirectUrl);
// }

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("API Route Hit: /api/user");

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("User Data:", user);

  if (!user || !user.id) {
    console.error("User is undefined or missing ID.");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  console.log("Database User:", dbUser);

  if (!dbUser) {
    const newUser = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
    console.log("New User Created:", newUser);
  }

  const redirectUrl =
    process.env.NODE_ENV === "production"
      ? "https://inspire-ai-tech.vercel.app"
      : "http://localhost:3000";

  console.log("Redirecting to:", redirectUrl);
  return NextResponse.redirect(redirectUrl);
}
