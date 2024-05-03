"use client"
import { Pet } from "@/app/lib/types/Dtos/PetDto";
import { create } from "zustand"
import { usePetStore } from "./petStore";
import { useAuthStore } from "./authStore";

type MatchState = {
    matchingPets: Pet[] | null,
    matchedPet: Pet | null,
    excludedBreeds: string[] | null,
    excludedInterest: string[] | null,
    excludedTraits: string[] | null,
    isMatchModalVisible: boolean,

    fetchMatchingPets: (token: string) => void;
    fetchMatchingPetsWithFilters: (token:string, excludedBreeds: string[], excludedInterests: string[], excludedTraits: string[]) => void;
    likePet: ( token:string, likedId : string) => void;
    showMatchModal: () => void;
    hideMatchModal: () => void;
    getMatchedPet: (petId: string) => void;
}

export const useMatchStore = create<MatchState>((set) => ({
    matchingPets: null,
    matchedPet: null,
    excludedBreeds: null,
    excludedInterest: null,
    excludedTraits: null,
    isMatchModalVisible: false,

    showMatchModal: () => set({ isMatchModalVisible: true }),

    hideMatchModal: () => set({ isMatchModalVisible: false }),

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
    
        const response = await fetch(`http://129.213.181.186/api/Pet/GetAllNonUserPetsBySpecieWithFiltersQuery?specieId=${specieId}&${params.toString()}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    
        const data = await response.json();
        console.log(data);
    },

    likePet: async (token: string, likedId : string) => {
        const userSelectedPet = usePetStore.getState().userSelectedPet;
        const response = await fetch(`http://129.213.181.186/api/Pet/LikePet`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                likerPetId: userSelectedPet?.id,
                likedPetId: likedId,
            }),
        });
        const data = await response.text();
        if (data == "Match") {
            console.log("Match!")           
            useMatchStore.getState().getMatchedPet(likedId);
            useMatchStore.getState().showMatchModal();
        }
        else {
            console.log("Liked!")
        }
    },

    getMatchedPet: async (petId: string) => {
        const token = useAuthStore.getState().token;
        const response = await fetch(`http://129.213.181.186/api/Pet/api/Pet/GetAllPetsByUserId?petId=${petId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

        const pet : Pet = await response.json();
        set({ matchedPet: pet });
    },
    }
))