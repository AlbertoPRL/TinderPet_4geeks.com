import { create } from "zustand";
import { User } from "../types/Dtos/userDto";

interface UserState {
  user: null | User;
   fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,

  fetchUser: async () => {
    const token = sessionStorage.getItem("auth");

    const response = await fetch(
      `http://129.213.181.186/api/User/api/User/GetUserById`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const user = await response.json();
    set({ user });
  },
}));
