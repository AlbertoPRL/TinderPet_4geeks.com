import { PreferencesType, PropsForms } from "@/app/lib/types/schema";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Select,
  SimpleGrid,
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
    <Card
      h={"full"}
      w={"100%"}
      bg="#f6f8fa"
      variant="outline"
      borderColor="#d8dee4"
    >
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Preferences
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Use a permanent address where you can receive mail.
        </Text>
      </CardHeader>

      <CardBody>
        <SimpleGrid height={"full"} columns={6} spacing={4}>
          <FormControl
            as={GridItem}
            colSpan={[6, 3]}
            isInvalid={errors.preferencePetType ? true : false}
          >
            <FormLabel htmlFor="petType" m={0} size={"sm"}>
              Pet Type *
            </FormLabel>
            <Select
              id="petType"
              autoComplete="type"
              defaultValue=""
              mt={1}
              bg="white"
              borderColor="#d8dee4"
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
            </Select>
            {errors.preferencePetType && (
              <ErrorMessage message={errors.preferencePetType.message} />
            )}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[6, 3]}
            isInvalid={errors.preferencePetGender ? true : false}
          >
            <FormLabel htmlFor="petGender" size={"sm"} m={0}>
              Gender *
            </FormLabel>
            <Select
              id="petGender"
              defaultValue=""
              autoComplete="gender"
              mt={1}
              bg="white"
              borderColor="#d8dee4"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("preferencePetGender")}
            >
              <option value="" disabled>
                Choose gender...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            {errors.preferencePetGender && (
              <ErrorMessage message={errors.preferencePetGender.message} />
            )}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[6]}
            isInvalid={errors.preferencePetTraits ? true : false}
          >
            <FormLabel htmlFor="traits" m={0} size={"sm"}>
              Personality Traits *
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
                    fontSize="x-small"
                  >
                    {trait}
                  </AutoCompleteItem>
                ))}
                <AutoCompleteCreatable fontSize="x-small" />
              </AutoCompleteList>
            </AutoComplete>
            <FormHelperText fontSize={"x-small"}>
              Please select 3 personality traits that best describe your
              preferences for your pet:
            </FormHelperText>
            {errors.preferencePetTraits && (
              <ErrorMessage message={errors.preferencePetTraits.message} />
            )}
          </FormControl>
        </SimpleGrid>
      </CardBody>

      <CardFooter justifyContent={"flex-end"}>
        <Button onClick={prevStep} size="sm" variant="ghost">
          Prev
        </Button>
        <Button type="submit" onClick={nextStep} size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
