"use client";

import useAuthStore from "@/app/lib/stores/authStore";
import useStore from "@/app/lib/stores/useStore";
import { useUserStore } from "@/app/lib/stores/userStore";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const authStore = useStore(useAuthStore, (state) => state);

  if (sessionStorage.getItem("auth") === null)
    console.log("No token"), router.push("/sign-in");

  return <>{children}</>;
}
