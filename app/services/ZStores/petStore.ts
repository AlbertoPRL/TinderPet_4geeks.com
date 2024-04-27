import { Pet } from '@/app/types/Dtos/PetDto';
import { create } from 'zustand';


type PetState = {
    pets: Pet[] | null;
    userSelectedPet: Pet | null;

    fetchPets: () => void;
    // selectPet: (/*pet: Pet*/) => void;
};

export const usePetStore = create<PetState>((set) => ({
    pets: null,
    userSelectedPet: null,
    fetchPets: async () => {
        // get token from local storage 
        //**const { token } = get(useTokenStore);**
        const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1YjhkYWI1Yi03YjhhLTQyY2ItOGY5OC1iZjBlMzVhOWY4MGQiLCJ1bmlxdWVfbmFtZSI6ImFkZWNyb2NrZXQzQGdtYWlsLmNvbSIsIm5iZiI6MTcxNDE1OTg3MCwiZXhwIjoxNzE0MjQ2MjcwLCJpYXQiOjE3MTQxNTk4NzB9.fJ0loWhag1Qjzwz6-btKaK4kzmd_hRJm1rAyusiUG4xqFn_I_e-tDp1kPgL2eh0KkxNYpManRJBjrXpqaPTiJQ";

        const response = await fetch(`http://129.213.181.186/api/Pet/api/Pet/GetAllPetsByUserId`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        const pets = await response.json();
        console.log(pets);
        set({ pets });  

        if (pets !== null) {
            set({ userSelectedPet: pets[0] });
        }
    },

    // selectPet: (/*pet: Pet*/) => {        
    //     set((state) => { 
    //         console.log(state.pets);
    //         return state;
    //         // return { userSelectedPet: state.pets![0] }
    //     });
    // },

}));
usePetStore.getState().fetchPets();
