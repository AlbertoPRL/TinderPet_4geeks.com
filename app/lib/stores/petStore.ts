import { Pet } from "@/app/lib/types/Dtos/PetDto";
import { create } from "zustand";
type PetState = {
  pets: Pet[] | null;

  fetchPets: (token: string | null | undefined) => Promise<Pet[]>;
};

export const usePetStore = create<PetState>((set) => ({
  pets: null,

  fetchPets: async (token) => {
    if (!token) {
      throw new Error("Token not found");
    }
    const response = await fetch(
      `http://129.213.181.186/api/Pet/api/Pet/GetAllPetsByUserId`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const pets: Pet[] = await response.json();

    set({ pets });

    return pets;
  },
}));
