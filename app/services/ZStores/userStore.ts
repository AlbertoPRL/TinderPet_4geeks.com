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
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxNDA3Mjk4OCwiZXhwIjoxNzE0MTU5Mzg4LCJpYXQiOjE3MTQwNzI5ODh9.ABZWOV065GLOwsdFgPCZbAC_NXeDMpGXmNcA8fgj7hMV3HEJ6S1DjKVUShp0IV9ifdSZraCUubQG8RGR3aZxKQ";

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