"use client";

import { VStack } from "@chakra-ui/react";
import SwipeablePetCard from "./SwipeablePetCard";
import Draggable from "react-draggable";

export default function Matches() {

    return (
        <VStack>
            <SwipeablePetCard></SwipeablePetCard>
        </VStack>
    );
}