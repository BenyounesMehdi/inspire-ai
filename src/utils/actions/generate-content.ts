"use server";

import { State } from "@/types/Types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { chatSession } from "../ai";

export async function generateContent(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return null;

  const prompt = formData.get("prompt");

  if (!prompt) {
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
    return state;
  } catch {
    const state: State = {
      status: "error",
      message: "error",
    };
    return state;
  }
}
