"use client";

import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const router = useRouter();
  // const authStore = useStore(useAuthStore, (state) => state);

  // if (!authStore?.isAuthenticated)
  //   console.log("No token"), router.push("/sign-in");

  // if (!authStore?.token) console.log("No token"), router.push("/sign-in");

  return <>{children}</>;
}
