"use client";

import { VStack } from "@chakra-ui/react";
import SwipeablePetCard from "./SwipeablePetCard";
import { useDrag } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import { usePetStore } from "@/app/services/ZStores/petStore";
import React, { useEffect } from "react";
import { useMatchStore } from "@/app/services/ZStores/matchStore";


export default function Matches() {
    const pets = usePetStore((state) => state.pets);
    const selectedPet = usePetStore((state) => state.userSelectedPet);
    const matchingPets = useMatchStore((state) => state.matchingPets);
    const fetchMatchingPets = useMatchStore(state => state.fetchMatchingPets);

    React.useEffect(() => {
        console.log(matchingPets);
        console.log(pets);
        console.log(selectedPet);
    }, [matchingPets, pets, selectedPet]);

    React.useEffect(() => {
        if (selectedPet !== null) {
          fetchMatchingPets();
        }
      }, [selectedPet, fetchMatchingPets]);

    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        api.start({ x: down ? mx : 0, y: down ? my : 0 });
    });

    return (
        <VStack>
            <animated.div {...bind()} style={{ x, y, userSelect: 'none' }}>
                <SwipeablePetCard></SwipeablePetCard>
            </animated.div>
        </VStack>
    );
}