import { NextRequest, NextResponse } from "next/server";
import { useAuthStore } from "../stores/authStore";

export async function checkAuthentication(request: NextRequest) {
  const token = sessionStorage.getItem("token");

  return token;
}
