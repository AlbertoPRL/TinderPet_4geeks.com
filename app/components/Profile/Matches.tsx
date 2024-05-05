"use client";

import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { useDrag } from "react-use-gesture";
import { useSpring, animated } from "react-spring";

import SwipeablePetCard from "./SwipeablePetCard";
import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";
import { useMatchStore } from "@/app/lib/stores/matchStore";
import { usePetStore } from "@/app/lib/stores/petStore";

export default function Matches() {
  const tokenStore = useStore(useAuthStore, (state) => state);
  const selectedPet = useStore(usePetStore, (state) => state.userSelectedPet);
  const matchingStore = useStore(useMatchStore, (state) => state);

  useEffect(() => {
    if (selectedPet && tokenStore?.token! !== null) {
      matchingStore?.fetchMatchingPets(tokenStore?.token!);
    }
  }, [selectedPet, matchingStore, tokenStore]);

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <VStack>
      <animated.div {...bind()} style={{ x, y, userSelect: "none" }}>
        <SwipeablePetCard />
      </animated.div>
    </VStack>
  );
}
