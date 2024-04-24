import { create } from "zustand";
import { TSignUpSchema } from "../types/schema";

export interface UserState {
  user: TSignUpSchema | null;
  userId: string | null;
  userToken: string | null;
}

export interface UserActions {
  setUser: (user: TSignUpSchema | null) => void;
  setUserId: (userId: string | null) => void;
  setTokenUser: (tokenUser: string | null) => void;
}

export const useUserStore = create<UserState & UserActions>((set) => ({
  user: null,
  userId: null,
  userToken: null,
  setUser: (user: TSignUpSchema | null) => set({ user }),
  setUserId: (userId: string | null) => set({ userId }),
  setTokenUser: (userToken: string | null) => set({ userToken }),
}));
