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
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxMzg5NzgzMSwiZXhwIjoxNzEzOTg0MjMxLCJpYXQiOjE3MTM4OTc4MzF9.tL2yzV_9WZD-SdoZ3HcTBisPO7Q20aC-GphN2yFvstpL81152ROLI8GZj-tdZZadnt8fgmOKUvhd_CtpPclw-g";

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