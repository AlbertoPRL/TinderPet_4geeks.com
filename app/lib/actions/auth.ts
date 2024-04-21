"use server";

import { TSignInSchema, TSignUpSchema } from "../types/schema";
import { redirect } from "next/navigation";

export async function signUp(data: TSignUpSchema) {
  if (!data) {
    throw new Error("Invalid sign up data");
  }
  let response: Response;
  try {
    response = await fetch("http://129.213.181.186/api/User", {
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

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    throw new Error("Failed to fetch data");
  }

  console.log(await response.text());
  redirect("/onboarding");
}

export async function signIn(data: TSignInSchema) {
  if (!data) {
    throw new Error("Invalid sign in data");
  }

  let response: Response;
  try {
    response = await fetch("http://129.213.181.186/api/User/api/User/LogIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
  } catch (error) {
    throw new Error("Failed to sign in with password");
  }

  if (!response.ok) {
    throw new Error("Failed to sign in with password");
  }

  console.log(await response.text());
  return redirect("/");
}
