'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


import { useStore } from '@/app/lib/hooks/zustandHook';
import { useAuthStore } from '@/app/lib/stores/authStore';
import { usePetStore } from '@/app/lib/stores/petStore';
import { Pet } from '@/app/lib/types/Dtos/PetDto';

export default function PetSelector() {
    const router = useRouter();
    const token = useAuthStore((state) => state.token);
    const petState = useStore(usePetStore, (state) => state);


    useEffect(() => {
        if (token) {
            petState?.fetchPets(token); // fetch pets using token
        }
    }, [token]);

    useEffect(() => {
        if (petState?.pets?.length === 1 && petState.userSelectedPet !== petState?.pets[0]) {
            handleSelectPet(petState?.pets[0]);
        }
    }, [petState?.pets])

    const handleSelectPet = (pet: Pet) => {
        petState?.selectPet(pet);
        router.push('/tinderpet/profile');
    }

    return (
        <div>
            {petState?.pets && petState?.pets.map((pet: Pet) => (
                <button key={pet.id} onClick={() => handleSelectPet(pet)}>
                    {pet.name}
                </button>
            ))}
        </div>
    )
}
