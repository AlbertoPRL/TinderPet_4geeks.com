import { create } from 'zustand';
import { User } from '@/app/types/Dtos/userDto';



type UserState = {
    user: User | null;
    fetchUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
    user: null,
    fetchUser: async () => {
        // get token from local storage 
        //**const { token } = get(useTokenStore);**
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxNDE1OTg3MCwiZXhwIjoxNzE0MjQ2MjcwLCJpYXQiOjE3MTQxNTk4NzB9.fJ0loWhag1Qjzwz6-btKaK4kzmd_hRJm1rAyusiUG4xqFn_I_e-tDp1kPgL2eh0KkxNYpManRJBjrXpqaPTiJQ";

        const response = await fetch(`http://129.213.181.186/api/User/api/User/GetUserById`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const user = await response.json();
        console.log(user);
        set({ user });
    },
}));
useUserStore.getState().fetchUser();