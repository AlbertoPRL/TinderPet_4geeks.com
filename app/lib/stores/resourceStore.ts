import { create } from "zustand";

interface ResourcesState {
    Interests: Interest[] | null;
    Traits: Trait[] | null;
    Breeds: Breed[] | null;

    fetchInterests: () => void;
    fetchTraits: () => void;
    fetchBreeds: () => void;
    checkResources: () => void;
}

export const useResourceStore = create<ResourcesState>((set) => ({
    Interests: null,
    Traits: null,
    Breeds: null,

    fetchInterests: async () => {
        let response: Response;
        try {
            response = await fetch("http://129.213.181.186/api/Resource/api/Resource/GetInterests");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        set({ Interests: data });
    },
    fetchTraits: async () => {
        let response: Response;
        try {
            response = await fetch("http://129.213.181.186/api/Resource");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        set({ Traits: data });
    },
    fetchBreeds: async () => {
        let response: Response;
        try {
            response = await fetch("http://129.213.181.186/api/Resource/api/Resource/GetBreeds");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        set({ Breeds: data });
    },
    
    checkResources: function () {
        if (this.Interests === null) {
            this.fetchInterests();
        }
        if (this.Traits === null) {
            this.fetchTraits();
        }
        if (this.Breeds === null) {
            this.fetchBreeds();
        }
    }
}));