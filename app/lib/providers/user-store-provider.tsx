"use client";

import { useUserStore } from "../stores/user";
import { TSignUpSchema } from "../types/schema";

export function AppInitializer({
  user,
  userId,
  userToken,
  children,
}: {
  user: TSignUpSchema | null;
  userId: string | null;
  userToken: string | null;
  children: React.ReactNode;
}) {
  useUserStore.setState({
    user,
    userId,
    userToken,
  });

  return children;
}
