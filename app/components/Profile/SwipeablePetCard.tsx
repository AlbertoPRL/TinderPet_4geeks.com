"use client";

import { useSwipeable } from "react-swipeable";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useStore } from "@/app/lib/hooks/zustandHook";
import { usePetStore } from "@/app/lib/stores/petStore";

export default function SwipeablePetCard() {
  const petState = useStore(usePetStore, (state) => state);

  const handlers = useSwipeable({
    onSwipedRight: () => console.log("swiped right"),
    onSwipedLeft: () => console.log("swiped left"),
    trackMouse: true,
  });

  return (
    <Card maxW="md" {...handlers}>
      <CardBody>
        <Image
          src="/images/testDog.jpg"
          alt="Pictures showing the pet"
          borderRadius="lg"
          style={{ pointerEvents: "none" }}
        />
        <HStack mt="6" spacing="3" alignItems={"flex-end"}>
          <Heading size="md">
            {petState?.userSelectedPet?.name || "No pet"}
            {","}
          </Heading>
          <Text fontSize="sm">
            {petState?.userSelectedPet?.breed || "No breed"}
          </Text>
        </HStack>

        <Stack mt="2" spacing="3">
          <Text fontSize="md">{petState?.userSelectedPet?.description}</Text>
        </Stack>
      </CardBody>
      {/* <CardFooter></CardFooter> */}
    </Card>
  );
}
// https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80
