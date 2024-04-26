import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TSignInSchema, TSignUpSchema } from "../types/schema";
import { signIn, signUp } from "../actions/auth";

interface AuthState {
  token: null | string;
  login: (data: TSignInSchema) => Promise<void>;
  register: (userInfo: TSignUpSchema) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      login: async (data) => {
        const access_token = await signIn(data);

        sessionStorage.setItem("auth", access_token);
      },
      register: async (userInfo) => {
        const result = await signUp(userInfo);

        const data: Partial<TSignUpSchema> = userInfo;

        const access_token = await signIn(data as TSignInSchema);
        sessionStorage.setItem("auth", access_token);
      },
      logout: async () => {
        sessionStorage.clear();
      },
    }),
    {
      name: "token",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
