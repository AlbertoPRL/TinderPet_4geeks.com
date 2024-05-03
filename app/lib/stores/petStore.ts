import { Pet } from '@/app/lib/types/Dtos/PetDto';
import { create } from 'zustand';

type PetState = {
    pets: Pet[] | null;
    userSelectedPet: Pet | null;


    fetchPets:  (token: string) => void;
    selectPet: (pet: Pet) => void;
};

export const usePetStore = create<PetState>((set) => ({
    pets: null,
    userSelectedPet: null,
    fetchPets: async  (token: string)  => {
        const response = await fetch(`http://129.213.181.186/api/Pet/api/Pet/GetAllPetsByUserId`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const pets = await response.json();
        console.log(pets);
        set({ pets });  
    },

    selectPet: (pet: Pet) => {
        set((state) => ({ ...state, userSelectedPet: pet }));
    }

}));