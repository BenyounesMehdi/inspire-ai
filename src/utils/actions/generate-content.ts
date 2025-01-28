"use server";

import { State } from "@/types/Types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { chatSession } from "../ai";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export async function generateContent(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  const [subscriptionStatus, content] = await Promise.all([
    prisma.subscription.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        status: true,
      },
    }),
    prisma.content.findMany({
      where: {
        userId: user.id,
      },
    }),
  ]);

  if (!subscriptionStatus || subscriptionStatus.status !== "active") {
    if (content.length < 1) {
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
          userId: user.id,
          template: template as string,
          prompt: prompt,
          output: res.response.text(),
        },
      });

      return state;
    } catch {
      const state: State = {
        status: "error",
        message: "error",
      };
      return state;
    }
  }
}
