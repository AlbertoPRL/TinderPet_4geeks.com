import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
