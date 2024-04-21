"use server";

import { TSignInSchema, TSignUpSchema } from "../types/schema";
import { redirect } from "next/navigation";

export async function signUp(data: TSignUpSchema) {
  const res = await fetch("http://129.213.181.186/api/User", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  if (res.ok) {
    redirect("/onboarding");
  }

  return res.json();
}

export async function signIn(data: TSignInSchema) {
  try {
    const res = await fetch("http://129.213.181.186/api/User/api/User/LogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to sign in with password");
    }
  } catch (error) {
    throw new Error("Failed to sign in with password");
  }

  return redirect("/");
}
