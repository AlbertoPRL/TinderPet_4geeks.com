import { FormDataType, PetInfoType, PropsForms } from "@/app/lib/schema";
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
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./error-message";

export default function PetInformationForm({ nextStep, prevStep }: PropsForms) {
  const {
    register,
    formState: { errors },
  } = useFormContext<PetInfoType>();

  return (
    <>
      <Box>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Pet Information
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Use a permanent address where you can receive mail.
        </Text>
      </Box>

      <Stack py={2} spacing={2}>
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
              autoComplete="pet-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("petName")}
            />
            {errors.petName && (
              <ErrorMessage message={errors.petName.message} />
            )}
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
              autoComplete="type"
              defaultValue=""
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("petType")}
            >
              <option value="" disabled>
                Select a pet type...
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </Select>
            {errors.petType && (
              <ErrorMessage message={errors.petType.message} />
            )}
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
              autoComplete="breed"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("petBreed")}
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
              defaultValue=""
              autoComplete="age"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("petAge")}
            >
              <option value="" disabled>
                Enter pet age
              </option>
              <option value="baby">Baby</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </Select>
            {errors.petAge && <ErrorMessage message={errors.petAge.message} />}
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
              defaultValue=""
              autoComplete="gender"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("petGender")}
            >
              <option value="" disabled>
                Choose gender...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            {errors.petGender && (
              <ErrorMessage message={errors.petGender.message} />
            )}
          </FormControl>
        </SimpleGrid>
      </Stack>

      <Flex width="100%" justify="flex-end" gap={4}>
        <Button onClick={prevStep} size="sm" variant="ghost">
          Prev
        </Button>
        <Button type="button" onClick={nextStep} size="sm">
          Next
        </Button>
      </Flex>
    </>
  );
}
