import { Pet } from '@/app/types/Dtos/PetDto';
import { create } from 'zustand';


type PetState = {
    pets: Pet[] | null;
    userSelectedPet: Pet | null;

    fetchPets: () => void;
    selectPet: (/*pet: Pet*/) => void;
};

export const usePetStore = create<PetState>((set) => ({
    pets: null,
    userSelectedPet: null,
    matchingPets: null,
    fetchPets: async () => {
        // get token from local storage 
        //**const { token } = get(useTokenStore);**
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxNDA3Mjk4OCwiZXhwIjoxNzE0MTU5Mzg4LCJpYXQiOjE3MTQwNzI5ODh9.ABZWOV065GLOwsdFgPCZbAC_NXeDMpGXmNcA8fgj7hMV3HEJ6S1DjKVUShp0IV9ifdSZraCUubQG8RGR3aZxKQ";

        const response = await fetch(`http://129.213.181.186/api/Pet/api/Pet/GetAllPetsByUserId`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const pets = await response.json();
        console.log(pets);
        set({ pets });
    },

    selectPet: (/*pet: Pet*/) => {
        set((state) => ({ userSelectedPet: state.pets && state.pets.length === 1 ? state.pets[0] : null }));
    },

}));
usePetStore.getState().fetchPets();
