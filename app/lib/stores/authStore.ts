import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TSignInSchema, TSignUpSchema } from "../types/schema";
import { signIn, signUp } from "../actions/auth";
import { usePetStore } from "./petStore";
import { useUserStore } from "./userStore";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  
  login: (data: TSignInSchema) => Promise<void>;
  register: (userInfo: TSignUpSchema) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      login: async (data) => {
        const access_token = await signIn(data);

        set({ isAuthenticated: true, token: access_token });

        const user = await useUserStore.getState().fetchUser(access_token);
        if (user) {
          document.cookie = `userId=${user.userId}`;
        }

        const pets = await usePetStore.getState().fetchPets(access_token);
        if (pets.length === 0) {
          document.cookie = "pets=false";
        } else {
          document.cookie = "pets=true";
        }

        document.cookie = `isAuthenticated=${true}`;
      },

      register: async (userInfo) => {
        const userId = await signUp(userInfo);

        const data: Partial<TSignUpSchema> = userInfo;

        const access_token = await signIn(data as TSignInSchema);

        set({ isAuthenticated: true, token: access_token });
        document.cookie = "isAuthenticated = true";
        document.cookie = `userId=${userId}`;
        document.cookie = "pets=false";
      },

      logout: async () => {
        localStorage.clear();
        document.cookie = "isAuthenticated=false; Max-Age=0;path=/;";
        document.cookie = "pets='false'; Max-Age=0;path=/;";
        document.cookie = "userId=''; Max-Age=0;path=/;";
      },
    }),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
