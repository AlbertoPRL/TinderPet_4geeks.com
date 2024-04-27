import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Heading,
  Text,
} from "@chakra-ui/react";
import { petTypes } from "./pet-information-form";
import { FormDataType, PropsForms } from "@/app/lib/types/schema";
import { fetchBreeds } from "@/app/lib/actions/onboarding";

export default function ConfirmationForm({ nextStep, prevStep }: PropsForms) {
  const [selectedBreeds, setSelectedBreeds] = useState<[]>([]);

  const { watch } = useFormContext<FormDataType>();
  const allData = watch();

  useEffect(() => {
    fetchBreedsHandler();
  }, []);

  async function fetchBreedsHandler() {
    const response = await fetchBreeds();

    setSelectedBreeds(response);
  }

  return (
    <Card h={"full"} w={"100%"} shadow={"none"}>
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Confirmation
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Please review your pet's profile before submitting.
          <br />
        </Text>
      </CardHeader>
      <CardBody>
        <Code
          display={"flex"}
          children={
            <pre>
              {JSON.stringify(
                [allData].map((item) => {
                  //Pet Type
                  if (item.petType) {
                    petTypes.map((pet) => {
                      if (item.petType === pet.id) {
                        item.petType = pet.name;
                      }
                    });
                  }
                  //Breed
                  if (item.petBreed) {
                    selectedBreeds.map(
                      (breed: { name: string; id: string }) => {
                        if (item.petBreed === breed.id) {
                          item.petBreed = breed.name;
                        }
                      }
                    );
                  }
                  //Gender
                  if (item.petGender) {
                    if (item.petGender === "0") {
                      item.petGender = "Male";
                    } else {
                      item.petGender = "Female";
                    }
                  }

                  return item;
                }),
                // allData,
                null,
                2
              )}
            </pre>
          }
        />
      </CardBody>

      <CardFooter justifyContent={"flex-end"} pt={0}>
        <Button onClick={prevStep} size="sm" variant="ghost">
          Prev
        </Button>
        <Button type="button" onClick={nextStep} size="sm">
          Finish
        </Button>
      </CardFooter>
    </Card>
  );
}
