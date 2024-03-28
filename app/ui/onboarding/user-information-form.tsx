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

export default function UserInformationForm({
  activeStep,
  nextStep,
  prevStep,
  isLastStep,
  hasCompletedAllSteps,
}: PropsForms) {
  return (
    <Flex flexDirection={"column"} justifyContent={"space-between"}>
      <Box>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Personal Information
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Use a permanent address where you can receive mail.
        </Text>
      </Box>

      <Stack py={5} spacing={6}>
        <SimpleGrid columns={6} spacing={6}>
          <FormControl as={GridItem} colSpan={[6, 3]}>
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
              name="first_name"
              id="first_name"
              autoComplete="given-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
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
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
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
              name="country"
              autoComplete="country"
              placeholder="Select option"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </Select>
          </FormControl>

          <FormControl as={GridItem} colSpan={6}>
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
              name="street_address"
              id="street_address"
              autoComplete="street-address"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
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
              name="city"
              id="city"
              autoComplete="city"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
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
              name="state"
              id="state"
              autoComplete="state"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
            <FormLabel
              m={0}
              htmlFor="postal_code"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              ZIP / Postal
            </FormLabel>
            <Input
              type="text"
              name="postal_code"
              id="postal_code"
              autoComplete="postal-code"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            />
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
