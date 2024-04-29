"use client";

import { VStack } from "@chakra-ui/react";
import SwipeablePetCard from "./SwipeablePetCard";
import { useMatchStore } from "@/app/lib/stores/matchStore";
import { usePetStore } from "@/app/lib/stores/petStore";
import React from "react";
import { useDrag } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import { useAuthStore } from "@/app/lib/stores/authStore";
import { useStore } from "zustand";



export default function Matches() {
    const token = useStore( useAuthStore, (state) => state.token)
    const selectedPet = usePetStore((state) => state.userSelectedPet);
    const fetchMatchingPets = useStore( useMatchStore, (state) => state.fetchMatchingPets);
`1`
    React.useEffect(() => {
        if (selectedPet && token !== null)  {
          fetchMatchingPets(token);
        }
      }, [selectedPet, fetchMatchingPets, token]);

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