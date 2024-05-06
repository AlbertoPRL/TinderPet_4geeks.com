import { Pet } from '@/app/lib/types/Dtos/PetDto';
import { use } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

type PetState = {
    pets: Pet[] | null;
    userSelectedPet: Pet | null;


    fetchPets: (token: string) => Promise<Pet[]>;
    selectPet: (pet: Pet) => void;
};

export const usePetStore = create<PetState>()(
    persist(
        (set) => ({

            pets: null,
            userSelectedPet: null,

            fetchPets: async (token: string) => {
                const response = await fetch(`http://129.213.181.186/api/Pet/api/Pet/GetAllPetsByUserId`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const pets = await response.json();
                console.log(pets);
                set({ pets });
                return pets;
            },

            selectPet: (pet: Pet) => {
                set((state) => ({ ...state, userSelectedPet: pet }));
            }
            }),
            {
            name: 'petStore',
            storage: createJSONStorage(() => (localStorage)),
            partialize: (state) => ({userSelectedPet: state.userSelectedPet}),
            }
        ));