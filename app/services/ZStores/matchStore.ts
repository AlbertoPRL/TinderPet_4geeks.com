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
        if(!userSelectedPet){
            console.error('No pet selected');
            return;
        }

        const breedId = userSelectedPet.BreedId;
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxNDA3Mjk4OCwiZXhwIjoxNzE0MTU5Mzg4LCJpYXQiOjE3MTQwNzI5ODh9.ABZWOV065GLOwsdFgPCZbAC_NXeDMpGXmNcA8fgj7hMV3HEJ6S1DjKVUShp0IV9ifdSZraCUubQG8RGR3aZxKQ";
        const response = await fetch(`http://129.213.181.186/api/Pet/GetAllNonUserPetsBySpecieId/${breedId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const matchingPets = await response.json();
        console.log(matchingPets);
        set({ matchingPets });
    },
}));
useMatchStore.getState().fetchMatchingPets();
