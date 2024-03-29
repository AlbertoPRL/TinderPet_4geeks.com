import { PropsForms } from "@/app/lib/types";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function PetInformationForm({
  activeStep,
  nextStep,
  prevStep,
  isLastStep,
  hasCompletedAllSteps,
}: PropsForms) {
  return (
    <Flex h={"100%"} flexDir={"column"} justifyContent={"space-between"}>
      <Box>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Pet Information
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Use a permanent address where you can receive mail.
        </Text>
      </Box>

      <Stack py={5} spacing={6}>
        <SimpleGrid columns={6} spacing={6}>
          <FormControl as={GridItem} colSpan={[3]}>
            <FormLabel
              htmlFor="petName"
              m={0}
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              Pet Name
            </FormLabel>
            <Input
              type="text"
              id="petName"
              name="petName"
              autoComplete="pet-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[3]}>
            <FormLabel
              htmlFor="petType"
              m={0}
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              Pet Type
            </FormLabel>
            <Select
              id="petType"
              name="petType"
              autoComplete="type"
              placeholder="Select a pet type..."
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel
              htmlFor="petBreed"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              m={0}
            >
              Pet Breed
            </FormLabel>
            <Input
              type="text"
              id="petBreed"
              name="petBreed"
              autoComplete="breed"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[3]}>
            <FormLabel
              htmlFor="petAge"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              m={0}
            >
              Pet Age
            </FormLabel>
            <Select
              id="petAge"
              placeholder="Enter pet age"
              autoComplete="age"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              <option value="baby">Baby</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={[3]}>
            <FormLabel
              htmlFor="petGender"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              m={0}
            >
              Gender
            </FormLabel>
            <Select
              id="petGender"
              placeholder="Choose gender..."
              autoComplete="gender"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </FormControl>
        </SimpleGrid>
      </Stack>

      <Flex width="100%" justify="flex-end" gap={4}>
        {!hasCompletedAllSteps ? (
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
}
