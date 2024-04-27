import { create } from "zustand";
import { User } from "../types/Dtos/userDto";

interface UserState {
  user: null | User;
  fetchUser: (token: string | null | undefined) => Promise<void>;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,

  fetchUser: async (token) => {
    const response = await fetch(
      `http://129.213.181.186/api/User/api/User/GetUserById`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await response.json();
    set({ user });
  },
}));
