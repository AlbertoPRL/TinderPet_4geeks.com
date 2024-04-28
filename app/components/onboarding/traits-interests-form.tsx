import { OtherInfoType, PropsForms } from "@/app/lib/types/schema";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VisuallyHidden,
  chakra,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import { Key, useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import ErrorMessage from "./error-message";
import { fetchInterests, fetchTraits } from "@/app/lib/actions/onboarding";

// const traits = [
//   "playful",
//   "affectionate",
//   "energetic",
//   "calm",
//   "intelligent",
//   "loyal",
//   "friendly",
//   "shy",
//   "stubborn",
//   "independent",
// ];

// const interests = [
//   "playing fetch",
//   "going for walks",
//   "cuddling",
//   "swimming",
//   "hunting",
//   "chasing toys",
//   "watching birds",
//   "socializing with other animals",
//   "sleeping",
// ];

function TraitsInterestsForm({ nextStep, prevStep }: PropsForms) {
  const [selectedTraits, setSelectedTraits] = useState<never[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<never[]>([]);

  const {
    register,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useFormContext<OtherInfoType>();

  const valueOfPetTraits = watch("petTraits");
  const valueOfPetInterests = watch("petInterests");

  const petTraits = register("petTraits");
  const petInterests = register("petInterests");

  useEffect(() => {
    fetchTraitsHandler();
    fetchInterestsHandler();
  }, []);

  async function fetchTraitsHandler() {
    const result = await fetchTraits();

    setSelectedTraits(result);
  }

  async function fetchInterestsHandler() {
    const result = await fetchInterests();
    const interests = result?.map((item: { name: string }) =>
      item.name.toLowerCase()
    );
    // console.log("interest", interests);
    setSelectedInterests(interests);
  }

  return (
    <Card h={"full"} w={"100%"} shadow={"none"}>
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Personality Traits, Interests & Profile Picture
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Please enter your pet's personality traits, interests and profile
          picture.
        </Text>
      </CardHeader>

      <CardBody>
        <SimpleGrid height={"full"} columns={6} spacing={4}>
          <FormControl
            as={GridItem}
            colSpan={[6, 3]}
            isInvalid={errors.petTraits ? true : false}
          >
            <FormLabel htmlFor="traits" m={0} size="sm">
              Personality Traits *
            </FormLabel>
            <AutoComplete
              openOnFocus
              multiple
              creatable
              onChange={(val: string[]) => setValue("petTraits", val)}
              value={valueOfPetTraits || []}
            >
              <AutoCompleteInput
                type="text"
                id="traits"
                mt={1}
                focusBorderColor="brand.400"
                size="xs"
                w="full"
                rounded="md"
                name={petTraits.name}
                onBlur={petTraits.onBlur}
                bg="white"
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
                        colorScheme="pink"
                      />
                    )
                  )
                }
              </AutoCompleteInput>
              <AutoCompleteList m={0}>
                {selectedTraits?.map(
                  (trait: { name: string; id: string }, cid) => (
                    <AutoCompleteItem
                      key={`option-${cid}`}
                      value={trait.name}
                      fontSize="x-small"
                      _hover={{
                        bg: "gray.100",
                      }}
                      sx={{ color: "pink.500" }}
                    >
                      {trait.name}
                    </AutoCompleteItem>
                  )
                )}

                <AutoCompleteCreatable fontSize="x-small" />
              </AutoCompleteList>
            </AutoComplete>
            <FormHelperText fontSize={"x-small"}>
              Please select 3 personality traits that best describe your pet:
            </FormHelperText>
            {errors.petTraits && (
              <ErrorMessage message={errors.petTraits.message} />
            )}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[6, 3]}
            isInvalid={errors.petInterests ? true : false}
          >
            <FormLabel htmlFor="interests" m={0} size={"sm"}>
              Interests *
            </FormLabel>
            <AutoComplete
              openOnFocus
              multiple
              creatable
              onChange={(val: string[]) => setValue("petInterests", val)}
              value={valueOfPetInterests || []}
            >
              <AutoCompleteInput
                type="text"
                id="interests"
                mt={1}
                focusBorderColor="brand.400"
                size="xs"
                w="full"
                rounded="md"
                name={petInterests.name}
                onBlur={petInterests.onBlur}
                bg="white"
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
                        fontSize="xx-small"
                        key={tid}
                        label={tag.label}
                        onRemove={tag.onRemove}
                      />
                    )
                  )
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {selectedInterests?.map((interest, cid) => (
                  <AutoCompleteItem
                    key={`option-${cid}`}
                    value={interest}
                    fontSize="x-small"
                    _selected={{ bg: "whiteAlpha.50" }}
                    _focus={{ bg: "whiteAlpha.100" }}
                  >
                    {interest}
                  </AutoCompleteItem>
                ))}
                <AutoCompleteCreatable fontSize="x-small" />
              </AutoCompleteList>
            </AutoComplete>
            <FormHelperText fontSize={"x-small"}>
              What are your pet's favorite activities? (Select 3)
            </FormHelperText>
            {errors.petInterests && (
              <ErrorMessage message={errors.petInterests.message} />
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6]}>
            <FormLabel htmlFor="petName" m={0} size="sm">
              Description of your pet *
            </FormLabel>
            <Controller
              control={control}
              name="description"
              render={({ field: { ref, ...rest } }) => (
                <Textarea
                  isInvalid={errors.description ? true : false}
                  id="description"
                  mt={1}
                  bg="white"
                  borderColor="#d8dee4"
                  shadow="sm"
                  size="sm"
                  rounded="md"
                  rows={3}
                  {...rest}
                />
              )}
            />
            <Box display="flex" justifyContent="space-between">
              {errors.description ? (
                <ErrorMessage message={errors.description.message} />
              ) : (
                <FormHelperText fontSize={"x-small"}>
                  Please provide a description of your pet
                </FormHelperText>
              )}
              <Text
                fontSize="x-small"
                color="gray.500"
                textAlign={"end"}
                mt={2}
              >
                Characters left: {50 - watch("description")?.length || 50}
              </Text>
            </Box>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6]}>
            <FormLabel m={0} size="sm">
              Please upload a profile picture for your pet.
            </FormLabel>
            <Flex
              mt={1}
              justify="center"
              px={2}
              py={2}
              borderWidth={2}
              borderStyle="dashed"
              rounded="md"
              bg="white"
            >
              <Stack spacing={1} textAlign="center">
                <Icon
                  mx="auto"
                  boxSize={10}
                  color="gray.400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
                <Flex fontSize="sm" color="gray.600" alignItems="baseline">
                  <chakra.label
                    htmlFor="file-upload"
                    cursor="pointer"
                    rounded="md"
                    fontSize="sm"
                    color="brand.600"
                    pos="relative"
                    _hover={{
                      color: "brand.400",
                    }}
                  >
                    <span>Upload a file</span>
                    <VisuallyHidden>
                      <input id="file-upload" name="file-upload" type="file" />
                    </VisuallyHidden>
                  </chakra.label>
                  <Text pl={1}>or drag and drop</Text>
                </Flex>
                <Text fontSize="xs" color="gray.500">
                  PNG, JPG, GIF up to 10MB
                </Text>
              </Stack>
            </Flex>
          </FormControl>
        </SimpleGrid>
      </CardBody>

      <CardFooter justifyContent={"flex-end"} pt={0}>
        <Button onClick={prevStep} size="sm" variant="ghost">
          Prev
        </Button>
        <Button type="button" onClick={nextStep} size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TraitsInterestsForm;
