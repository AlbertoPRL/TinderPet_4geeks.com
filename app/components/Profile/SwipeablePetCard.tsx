'use client';

import React, {useState } from 'react';
import { useMatchStore } from '@/app/lib/stores/matchStore';
import { useStore } from 'zustand';
import { useSwipeable } from 'react-swipeable';
import { Card, CardBody, Stack, Heading, CardFooter, Text, Image, useBoolean } from "@chakra-ui/react";
import { useAuthStore } from '@/app/lib/stores/authStore';

export default function SwipeablePetCard() {
    const matchingPets = useStore(useMatchStore, (state) => state.matchingPets);
    const likePet = useStore(useMatchStore, (state) => state.likePet);
    const token = useStore(useAuthStore, (state) => state.token);
    const [currentPetIndex, setCurrentPetIndex] = useState(0);
    const [endOfList, setEndOfList] = useBoolean(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (!matchingPets) return;
            console.log('Swiped left:', matchingPets[currentPetIndex]);
            const nextIndex = (currentPetIndex + 1) % matchingPets.length;
            if (nextIndex === 0) {
                setEndOfList.toggle();
            } else {
                setCurrentPetIndex(nextIndex);
            }
        },
        onSwipedRight: () => {
            if (!matchingPets || !token || !matchingPets[currentPetIndex].id) return;
            console.log('Swiped right:', matchingPets[currentPetIndex]);
            const likedId = matchingPets[currentPetIndex].id;
            if (token && likedId) {
                likePet(token, likedId);
            }
            const nextIndex = (currentPetIndex + 1) % matchingPets.length;
            if (nextIndex === 0) {
                setEndOfList.toggle();
            } else {
                setCurrentPetIndex(nextIndex);
            }
        },
        trackMouse: true
    });

    if (!matchingPets) {
        return <div>Loading...</div>;
    }
    if(endOfList) {
        return <div>End of the list. Remember to check your search filters if you have any issue.</div>;
    }

    const pet = matchingPets[currentPetIndex];

    return (
        <Card maxW='md' {...handlers}>
            <CardBody>
                <Image
                    src='/images/testDog.jpg'
                    alt='Pictures showing the pet'
                    borderRadius='lg'
                    style={{ pointerEvents: 'none' }}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{pet.name}</Heading>
                    <Text>
                        {pet.description}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
    );
}