'use client';

import { useAuthStore } from '@/app/lib/stores/authStore';
import { usePetStore } from '@/app/lib/stores/petStore';
import { Pet } from '@/app/lib/types/Dtos/PetDto';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useStore } from 'zustand';

export default function PetSelector() {
    const router = useRouter();
    const token = useAuthStore((state) => state.token);
    const petState = useStore(usePetStore, (state) => state);

    const handleSelectPet = (pet: Pet) => {
        petState.selectPet(pet);
        router.push('/tinderpet/profile');
    }

    useEffect(() => {
        if (token) {
            petState.fetchPets(token); // fetch pets using token
        }
    }, [token,petState.fetchPets]);

    useEffect(() => {
        if(petState.pets?.length === 1 && petState.userSelectedPet !== petState.pets[0]){
            handleSelectPet(petState.pets[0]);
        }
    }, [petState.pets, handleSelectPet])

    return (
        <div>
            {petState.pets && petState.pets.map((pet: Pet) => (
                <button key={pet.id} onClick={() => handleSelectPet(pet)}>
                    {pet.name}
                </button>
            ))}
        </div>
    )
}
