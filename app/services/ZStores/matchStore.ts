"use client"

import { Pet } from "@/app/types/Dtos/PetDto";
import { create } from "zustand"
import { usePetStore } from "./petStore";


type MatchState = {
    matchingPets : Pet[] | null,
    fetchMatchingPets: () => void;
}

export const useMatchStore = create<MatchState>((set) => ({
    matchingPets : null,
    fetchMatchingPets: async () => {
        const userSelectedPet = usePetStore.getState().userSelectedPet;
        if(userSelectedPet === null){
            console.error('No pet selected');
            return;
        }

        const specieId = userSelectedPet.specieId;
        console.log(specieId);
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxNDE1OTg3MCwiZXhwIjoxNzE0MjQ2MjcwLCJpYXQiOjE3MTQxNTk4NzB9.fJ0loWhag1Qjzwz6-btKaK4kzmd_hRJm1rAyusiUG4xqFn_I_e-tDp1kPgL2eh0KkxNYpManRJBjrXpqaPTiJQ";
        const response = await fetch(`http://129.213.181.186/api/Pet/GetAllNonUserPetsBySpecieId/${specieId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const matchingPets = await response.json();
        console.log(matchingPets);
        set({ matchingPets });
    },
}));
