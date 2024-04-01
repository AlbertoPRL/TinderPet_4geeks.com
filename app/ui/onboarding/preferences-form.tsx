"use client";
import { PreferencesType, PropsForms } from "@/app/lib/schema";
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
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./error-message";

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

export default function PreferencesForm({ nextStep, prevStep }: PropsForms) {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<PreferencesType>();

  const valuePreferencePetTraits = watch("preferencePetTraits");
  const preferencePetTraits = register("preferencePetTraits");

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
              autoComplete="type"
              defaultValue=""
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("preferencePetType")}
            >
              <option value="" disabled>
                Select a pet type...
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </Select>
            {errors.preferencePetType && (
              <ErrorMessage message={errors.preferencePetType.message} />
            )}
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
              {...register("preferencePetAge")}
            >
              <option value="" disabled>
                Enter pet age
              </option>
              <option value="baby">Baby</option>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </Select>
            {errors.preferencePetAge && (
              <ErrorMessage message={errors.preferencePetAge.message} />
            )}
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
              defaultValue=""
              autoComplete="gender"
              mt={1}
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("preferencePetGender")}
            >
              <option value="" disabled>
                Choose gender...
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
            {errors.preferencePetGender && (
              <ErrorMessage message={errors.preferencePetGender.message} />
            )}
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
              onChange={(val: string[]) => setValue("preferencePetTraits", val)}
              value={valuePreferencePetTraits || []}
            >
              <AutoCompleteInput
                type="text"
                id="traits"
                mt={1}
                focusBorderColor="brand.400"
                size="xs"
                w="full"
                rounded="md"
                name={preferencePetTraits.name}
                onBlur={preferencePetTraits.onBlur}
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
                        fontSize={"xx-small"}
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
            {errors.preferencePetTraits && (
              <ErrorMessage message={errors.preferencePetTraits.message} />
            )}
          </FormControl>
        </SimpleGrid>
      </Stack>

      <Flex width="100%" justify="flex-end" gap={4}>
        <Button onClick={prevStep} size="sm" variant="ghost">
          Prev
        </Button>
        <Button type="submit" onClick={nextStep} size="sm">
          Next
        </Button>
      </Flex>
    </Flex>
  );
}
