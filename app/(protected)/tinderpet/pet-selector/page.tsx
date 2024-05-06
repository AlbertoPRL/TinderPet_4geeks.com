import { Flex } from "@chakra-ui/react";
import CardPet from "@/app/components/pet-selector/card-pet";

export default function PetSelector() {
  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <CardPet />
      </Flex>
    </div>
  );
}
