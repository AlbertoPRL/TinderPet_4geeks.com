import { PetInfoType, PropsForms } from "@/app/lib/types/schema";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "./error-message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function PetInformationForm({
  activeStep,
  nextStep,
  prevStep,
}: PropsForms) {
  const [startDate, setStartDate] = useState(null);

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<PetInfoType>();

  return (
    <Card h={"full"} w={"100%"} shadow={"none"}>
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Pet Information
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Please enter your pet's name, type, breed, age and gender.
        </Text>
      </CardHeader>

      <CardBody>
        <SimpleGrid height={"full"} columns={6} gap={4}>
          <FormControl
            as={GridItem}
            colSpan={[3]}
            isInvalid={errors.petName ? true : false}
          >
            <FormLabel htmlFor="petName" m={0} size="sm">
              Pet Name *
            </FormLabel>
            <Input
              type="text"
              id="petName"
              autoComplete="pet-name"
              mt={1}
              bg="white"
              borderColor="#d8dee4"
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

          <FormControl
            as={GridItem}
            colSpan={[3]}
            isInvalid={errors.petType ? true : false}
          >
            <FormLabel htmlFor="petType" m={0} size="sm">
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
              {...register("petType")}
            >
              <option value="" disabled>
                Select a pet type...
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </Select>
            {errors.petType && (
              <ErrorMessage message={errors.petType.message} />
            )}
          </FormControl>

          <FormControl as={GridItem} colSpan={[6, 3]}>
            <FormLabel htmlFor="petBreed" size="sm" m={0}>
              Pet Breed
            </FormLabel>
            <Input
              type="text"
              id="petBreed"
              autoComplete="breed"
              mt={1}
              bg="white"
              borderColor="#d8dee4"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
              {...register("petBreed")}
            />
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[3]}
            isInvalid={errors.petAge ? true : false}
          >
            <FormLabel htmlFor="petAge" size="sm" m={0}>
              Pet Age *
            </FormLabel>

            <Controller
              name="petAge"
              control={control}
              render={({ field }) => (
                // @ts-ignore
                <DatePicker
                  {...field}
                  selected={field.value || null}
                  onChange={(date) => field.onChange(date)}
                  dateFormat="MM/dd/yyyy"
                  className="datepicker"
                  customInput={
                    <Input
                      id="petAge"
                      mt={1}
                      bg="white"
                      borderColor="#d8dee4"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      // {...register("petAge")}
                    />
                  }
                />
              )}
            />

            {errors.petAge && <ErrorMessage message={errors.petAge.message} />}
          </FormControl>

          <FormControl
            as={GridItem}
            colSpan={[3]}
            isInvalid={errors.petGender ? true : false}
          >
            <FormLabel htmlFor="petGender" size="sm" m={0}>
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
              {...register("petGender")}
            >
              <option value="" disabled>
                Choose gender...
              </option>
              <option value="0">Male</option>
              <option value="1">Female</option>
            </Select>
            {errors.petGender && (
              <ErrorMessage message={errors.petGender.message} />
            )}
          </FormControl>
        </SimpleGrid>
      </CardBody>

      <CardFooter justifyContent={"flex-end"} pt={0}>
        <Button
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
      </CardFooter>
    </Card>
  );
}