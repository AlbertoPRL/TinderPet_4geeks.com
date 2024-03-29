"use client";
import { PropsForms } from "@/app/lib/types";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import { Key } from "react";

export default function PreferencesForm({
  activeStep,
  nextStep,
  prevStep,
  isLastStep,
  hasCompletedAllSteps,
}: PropsForms) {
  const traits = [
    "playful",
    "affectionate",
    "energetic",
    "calm",
    "intelligent",
    "loyal",
    "friendly",
    "shy",
    "stubborn",
    "independent",
  ];

  return (
    <Flex h={"100%"} flexDir={"column"} justifyContent={"space-between"}>
      <Box>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Preferences
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Use a permanent address where you can receive mail.
        </Text>
      </Box>

      <Stack py={5} spacing={6}>
        <SimpleGrid columns={6} spacing={6}>
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

          <FormControl as={GridItem} colSpan={[6, 3]}>
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

          <FormControl as={GridItem} colSpan={[6]}>
            <FormLabel
              htmlFor="traits"
              m={0}
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              Personality Traits
            </FormLabel>
            <AutoComplete
              openOnFocus
              multiple
              creatable
              onChange={(vals: any) => console.log(vals)}
            >
              <AutoCompleteInput
                type="text"
                id="traits"
                mt={1}
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              >
                {({ tags }: any) =>
                  tags?.map(
                    (
                      tag: {
                        label: string;
                        onRemove: (() => void) | undefined;
                      },
                      tid: Key | null | undefined
                    ) => (
                      <AutoCompleteTag
                        fontSize={"xs"}
                        key={tid}
                        label={tag.label}
                        onRemove={tag.onRemove}
                      />
                    )
                  )
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {traits.map((trait, cid) => (
                  <AutoCompleteItem
                    key={`option-${cid}`}
                    value={trait}
                    fontSize="xs"
                    _selected={{ bg: "whiteAlpha.50" }}
                    _focus={{ bg: "whiteAlpha.100" }}
                  >
                    {trait}
                  </AutoCompleteItem>
                ))}
                <AutoCompleteCreatable fontSize="xs" />
              </AutoCompleteList>
            </AutoComplete>
            <FormHelperText fontSize={"xs"}>
              Please select 5 personality traits that best describe your
              preferences for your pet:
            </FormHelperText>
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
