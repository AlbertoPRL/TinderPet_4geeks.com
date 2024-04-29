"use client"
import { Pet } from "@/app/lib/types/Dtos/PetDto";
import { create } from "zustand"
import { usePetStore } from "./petStore";

type MatchState = {
    matchingPets: Pet[] | null,
    excludedBreeds: string[] | null,
    excludedInterest: string[] | null,
    excludedTraits: string[] | null

    fetchMatchingPets: (token: string) => void;
    fetchMatchingPetsWithFilters: (token:string, excludedBreeds: string[], excludedInterests: string[], excludedTraits: string[]) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
    matchingPets: null,
    excludedBreeds: null,
    excludedInterest: null,
    excludedTraits: null,

    fetchMatchingPets: async (token: string) => {
        const userSelectedPet = usePetStore.getState().userSelectedPet;
        if (userSelectedPet === null) {
            console.log('No pet selected');
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
    fetchMatchingPetsWithFilters: async (token: string, excludedBreeds: string[], excludedInterests: string[], excludedTraits: string[]) => {
        const userSelectedPet = usePetStore.getState().userSelectedPet;
        if (userSelectedPet === null) {
            console.log('No pet selected');
            return;
        }
    
        const specieId = userSelectedPet.specieId;
        const params = new URLSearchParams();
        excludedBreeds.forEach(breed => params.append('ExcludedBreeds', breed));
        excludedTraits.forEach(trait => params.append('ExcludedTraits', trait));
        excludedInterests.forEach(interest => params.append('ExcludedInterests', interest));
    
        const response = await fetch(`http://localhost:5126/api/Pet/GetAllNonUserPetsBySpecieWithFiltersQuery?specieId=${specieId}&${params.toString()}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    
        // You can now use the response. For example, convert it to JSON:
        const data = await response.json();
        console.log(data);
    }
}));