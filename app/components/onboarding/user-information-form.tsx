import { PropsForms, UserInfoType } from "@/app/lib/types/schema";
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

export default function UserInformationForm({
  activeStep,
  nextStep,
  prevStep,
}: PropsForms) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInfoType>();

  return (
    <>
      <Box>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Personal Information
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Use a permanent address where you can receive mail.
        </Text>
      </Box>

      <Stack py={2} spacing={2}>
        <SimpleGrid columns={6} spacing={6}>
          <FormControl as={GridItem} colSpan={[3]}>
            <FormLabel
              m={0}
              htmlFor="first_name"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              First name
            </FormLabel>
            <Input
              type="text"
              id="first_name"
              autoComplete="given-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("firstName")}
            />

            {errors.firstName && (
              <ErrorMessage message={errors.firstName.message} />
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[3]}>
            <FormLabel
              m={0}
              htmlFor="last_name"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              Last name
            </FormLabel>
            <Input
              type="text"
              id="last_name"
              autoComplete="family-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("lastName")}
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[4, 3]}>
            <FormLabel
              htmlFor="country"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              m={0}
            >
              Country / Region
            </FormLabel>
            <Select
              id="country"
              autoComplete="country"
              mt={1}
              defaultValue=""
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("country")}
            >
              <option value="" disabled>
                Select a country
              </option>
              <option value="USA">United States</option>
              <option value="CA">Canada</option>
              <option value="MX">Mexico</option>
            </Select>
            {errors.country && (
              <ErrorMessage message={errors.country.message || ""} />
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 6]}>
            <FormLabel
              m={0}
              htmlFor="street_address"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              Street address
            </FormLabel>
            <Input
              type="text"
              id="street_address"
              autoComplete="street-address"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("address")}
            />
            {errors.address && (
              <ErrorMessage message={errors.address.message || ""} />
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[2, 2]}>
            <FormLabel
              m={0}
              htmlFor="city"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              City
            </FormLabel>
            <Input
              type="text"
              id="city"
              autoComplete="city"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("city")}
            />
            {errors.city && (
              <ErrorMessage message={errors.city.message || ""} />
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[2, 2]}>
            <FormLabel
              m={0}
              htmlFor="state"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              State
            </FormLabel>
            <Input
              type="text"
              id="state"
              autoComplete="state"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("state")}
            />
            {errors.state && (
              <ErrorMessage message={errors.state.message || ""} />
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[2, 2]}>
            <FormLabel
              m={0}
              htmlFor="postal_code"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              ZIP code
            </FormLabel>
            <Input
              type="text"
              id="postal_code"
              autoComplete="postal-code"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("postalCode")}
            />
            {errors.postalCode && (
              <ErrorMessage message={errors.postalCode.message} />
            )}
          </FormControl>
        </SimpleGrid>
      </Stack>

      <Flex width="100%" justify="flex-end" gap={4}>
        <Button
          type="button"
          isDisabled={activeStep === 0}
          onClick={prevStep}
          size="sm"
          variant="ghost"
        >
          Prev
        </Button>
        <Button type="button" onClick={nextStep} size="sm">
          Next
        </Button>
      </Flex>
    </>
  );
}
