"use client";

import { FormDataType, FormSchema } from "@/app/lib/schema";
import { Box, Flex, useSteps } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Steps from "./steps";
import UserInformationForm from "./user-information-form";
import ConfirmationForm from "./confirmation-form";
import PetInformationForm from "./pet-information-form";
import TraitsInterestsForm from "./traits-interests-form";
import PreferencesForm from "./preferences-form";

const steps = [
  {
    title: "Step 1",
    description: "User Information",
    fields: [
      "firstName",
      "lastName",
      "country",
      "address",
      "city",
      "state",
      "zipCode",
    ],
  },
  {
    title: "Step 2",
    description: "Pet Information",
    fields: ["petName", "petType", "petBreed", "petAge", "petGender"],
  },
  {
    title: "Step 3 ",
    description: "Personality Traits & Interests",
    fields: ["petTraits", "petInterests", "petPicture"],
  },
  {
    title: "Step 4",
    description: "Preferences",
    fields: [
      "preferencePetType",
      "preferencePetAge",
      "preferencePetGender",
      "preferencePetTraits",
    ],
  },
  { title: "Step 5", description: "Confirmation" },
];

export default function Form() {
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps?.length,
  });

  //   const isLastStep = activeStep === steps?.length - 1;
  //   const hasCompletedAllSteps = activeStep === steps?.length;

  const methods = useForm<FormDataType>({
    resolver: zodResolver(FormSchema),
  });

  const { handleSubmit, reset, trigger } = methods;

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data);

    reset();
  };

  type FieldName = keyof FormDataType;

  const next = async () => {
    const fields = steps[activeStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (activeStep < steps.length - 1) {
      goToNext();
    }
    if (activeStep === steps.length - 1) {
      await handleSubmit(onSubmit)();
    }
  };

  const prev = () => {
    if (activeStep > 0) {
      goToPrevious();
    }
  };

  return (
    <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
      <Box
        background={"gray.200"}
        p={4}
        borderRadius={6}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"stretch"}
        justifyContent={"center"}
        gap={4}
      >
        <Steps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        <Box
          background={"white"}
          borderRadius="md"
          p={6}
          boxShadow="lg"
          w="full"
          maxW={"30em"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {activeStep === 0 && (
                <UserInformationForm
                  nextStep={next}
                  prevStep={prev}
                  activeStep={activeStep}
                />
              )}
              {activeStep === 1 && (
                <PetInformationForm nextStep={next} prevStep={prev} />
              )}
              {activeStep === 2 && (
                <TraitsInterestsForm nextStep={next} prevStep={prev} />
              )}
              {activeStep === 3 && (
                <PreferencesForm nextStep={next} prevStep={prev} />
              )}
              {activeStep === 4 && (
                <ConfirmationForm nextStep={next} prevStep={prev} />
              )}
            </form>
          </FormProvider>
        </Box>
      </Box>
    </Flex>
  );
}
