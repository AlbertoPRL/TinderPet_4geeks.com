"use client"
import { Pet } from "@/app/lib/types/Dtos/PetDto";
import { create } from "zustand"
import { usePetStore } from "./petStore";

type MatchState = {
    matchingPets : Pet[] | null,
    fetchMatchingPets: (token : string) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
    matchingPets : null,
    fetchMatchingPets: async (token : string) => {
        const userSelectedPet = usePetStore.getState().userSelectedPet;
        if(userSelectedPet === null){
            console.error('No pet selected');
            return;
        }
        const specieId = userSelectedPet.specieId;
        const response = await fetch(`http://129.213.181.186/api/Pet/GetAllNonUserPetsBySpecieId/${specieId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        const matchingPets = await response.json();
        set({ matchingPets });
    },
}));