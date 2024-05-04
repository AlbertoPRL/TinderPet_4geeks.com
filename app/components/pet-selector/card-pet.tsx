"use client";

import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";
import { usePetStore } from "@/app/lib/stores/petStore";
import { Pet } from "@/app/lib/types/Dtos/PetDto";

export default function CardPet() {
  const router = useRouter();
  const token = useAuthStore((state) => state.token);
  const petState = useStore(usePetStore, (state) => state);

  useEffect(() => {
    if (token) {
      petState?.fetchPets(token); // fetch pets using token
    }
  }, [token]);

  useEffect(() => {
    if (
      petState?.pets?.length === 1 &&
      petState.userSelectedPet !== petState?.pets[0]
    ) {
      handleSelectPet(petState?.pets[0]);
    }
  }, [petState?.pets]);

  const handleSelectPet = (pet: Pet | null | undefined) => {
    if (pet) {
      petState?.selectPet(pet);
      router.push("/tinderpet/profile");
    }
  };

  return (
    <Card minW={"xs"} maxW={"xs"}>
      <CardHeader>
        <Heading size="md" ps={1}>
          Select your pet:
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="3">
          <Suspense fallback={<div>Loading...</div>}>
            {petState?.pets
              ? petState?.pets.map((pet) => {
                  let description: string | undefined = "";

                  if (pet && pet.description) {
                    description =
                      pet.description?.charAt(0).toUpperCase() +
                      pet.description?.slice(1);
                  }

                  return (
                    <Button
                      key={pet?.id}
                      onClick={() => handleSelectPet(pet)}
                      variant="ghost"
                      textAlign={"left"}
                      h={"full"}
                      p={1}
                    >
                      <Box w={"full"}>
                        <HStack alignItems={"end"}>
                          <Heading size="md">{pet?.name}:</Heading>
                          <Text fontSize="sm">
                            {pet?.specie}, {pet?.breed}{" "}
                          </Text>
                        </HStack>
                        <Text
                          pt={1}
                          fontSize="sm"
                          color="gray.500"
                          noOfLines={2}
                        >
                          {description !== "" ? description : "No description"}
                        </Text>
                      </Box>
                    </Button>
                  );
                })
              : "Loading..."}
          </Suspense>
        </Stack>
      </CardBody>
    </Card>
  );
}
