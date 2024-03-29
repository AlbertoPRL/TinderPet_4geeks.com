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
  Icon,
  SimpleGrid,
  Stack,
  Text,
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
import { Key } from "react";

function TraitsInterestsForm({
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

  const interests = [
    "Playing fetch",
    "Going for walks",
    "Cuddling",
    "Swimming",
    "Hunting",
    "Chasing toys",
    "Watching birds",
    "Socializing with other animals",
    "Sleeping",
  ];

  return (
    <Flex h={"100%"} flexDir={"column"} justifyContent={"space-between"}>
      <Box>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Personality Traits, Interests & Profile Picture
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Use a permanent address where you can receive mail.
        </Text>
      </Box>

      <Stack py={5} spacing={6}>
        <SimpleGrid columns={6} spacing={6}>
          <FormControl as={GridItem} colSpan={[6, 3]}>
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
              Please select 5 personality traits that best describe your pet:
            </FormHelperText>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel
              htmlFor="interests"
              m={0}
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
            >
              Interests
            </FormLabel>
            <AutoComplete
              openOnFocus
              multiple
              creatable
              onChange={(vals: any) => console.log(vals)}
            >
              <AutoCompleteInput
                type="text"
                id="interests"
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
                {interests.map((interest, cid) => (
                  <AutoCompleteItem
                    key={`option-${cid}`}
                    value={interest}
                    fontSize="xs"
                    _selected={{ bg: "whiteAlpha.50" }}
                    _focus={{ bg: "whiteAlpha.100" }}
                  >
                    {interest}
                  </AutoCompleteItem>
                ))}
                <AutoCompleteCreatable fontSize="xs" />
              </AutoCompleteList>
            </AutoComplete>
            <FormHelperText fontSize={"xs"}>
              What are your pet's favorite activities? (Select all that apply)
            </FormHelperText>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6]}>
            <FormLabel fontSize="sm" fontWeight="md" color="gray.700">
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

export default TraitsInterestsForm;
