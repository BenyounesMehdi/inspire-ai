"use server";

import { State } from "@/types/Types";
import { chatSession } from "../ai";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function generateContent(prevState: unknown, formData: FormData) {
  const { userId } = await auth();
  const response = await (await clerkClient()).users.getUser(userId as string);

  console.log("response: ", response);

  if (!response) return null;

  const [subscriptionStatus, content] = await Promise.all([
    prisma.subscription.findUnique({
      where: {
        userId: response.id,
      },
      select: {
        status: true,
      },
    }),
    prisma.content.findMany({
      where: {
        userId: response.id,
      },
    }),
  ]);

  if (!subscriptionStatus || subscriptionStatus.status !== "active") {
    if (content.length < 5) {
      return createContent();
    } else {
      return redirect("/pricing");
    }
  } else if (subscriptionStatus.status === "active") {
    return createContent();
  }

  async function createContent() {
    const userPrompt = formData.get("prompt");
    const prePrompt = formData.get("prePrompt");
    const prompt = prePrompt + "" + userPrompt;
    const template = formData.get("template");

    if (!userPrompt) {
      const state: State = {
        status: "error",
        message: "Please set your prompt",
      };
      return state;
    }

    try {
      const res = await chatSession.sendMessage(prompt);
      const state: State = {
        status: "success",
        message: "valid",
        content: res.response.text(),
      };

      await prisma.content.create({
        data: {
          userId: response.id,
          template: template as string,
          prompt: prompt,
          output: res.response.text(),
        },
      });

      revalidateTag("user-history");

      return state;
    } catch {
      const state: State = {
        status: "error",
        message: "Unable to generate content, please try again",
      };
      return state;
    }
  }
}
