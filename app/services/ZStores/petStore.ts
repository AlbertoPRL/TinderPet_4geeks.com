import { Pet } from '@/app/types/Dtos/PetDto';
import { create } from 'zustand';


type PetState = {
    pets: Pet[] | null;
    fetchPets: () => void;
};

export const usePetStore = create<PetState>((set) => ({
    pets: null,
    fetchPets: async () => {
        // get token from local storage 
        //**const { token } = get(useTokenStore);**
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxMzg5NzgzMSwiZXhwIjoxNzEzOTg0MjMxLCJpYXQiOjE3MTM4OTc4MzF9.tL2yzV_9WZD-SdoZ3HcTBisPO7Q20aC-GphN2yFvstpL81152ROLI8GZj-tdZZadnt8fgmOKUvhd_CtpPclw-g";

        const response = await fetch(`http://129.213.181.186/api/Pet/api/Pet/GetAllPetsByUserId`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const pets = await response.json();
        console.log(pets);
        set({ pets });
    },
}));
usePetStore.getState().fetchPets();