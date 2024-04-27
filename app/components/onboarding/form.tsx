"use client";

import { Box, Flex, useSteps } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ConfirmationForm from "./confirmation-form";
import PetInformationForm from "./pet-information-form";
import TraitsInterestsForm from "./traits-interests-form";
import PreferencesForm from "./preferences-form";
import ResponsiveSteps from "./responsive-steps";
import { FormDataType, FormSchema } from "@/app/lib/types/schema";

const steps = [
  {
    title: "Step 1",
    description: "Pet Information",
    fields: ["petName", "petType", "petBreed", "birthday", "petGender"],
  },
  {
    title: "Step 2 ",
    description: "Traits & Interests",
    fields: ["petTraits", "petInterests", "petPicture"],
  },
  // {
  //   title: "Step 3",
  //   description: "Preferences",
  //   fields: [
  //     "preferencePetType",
  //     "preferencePetAge",
  //     "preferencePetGender",
  //     "preferencePetTraits",
  //   ],
  // },
  { title: "Step 3", description: "Confirmation" },
];

export default function Form() {
  const {
    activeStep,
    setActiveStep,
    goToNext,
    goToPrevious,
    isCompleteStep,
    getStatus,
  } = useSteps({
    index: 0,
    count: steps?.length,
  });

  //   const isLastStep = activeStep === steps?.length - 1;
  const hasCompletedAllSteps = activeStep === steps?.length;

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
      setActiveStep(3);
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
        p={4}
        display={"flex"}
        justifyContent="center"
        alignItems={{ base: "center", lg: "stretch" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap={4}
        minH={"55%"}
        w={"full"}
      >
        <ResponsiveSteps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        <Box width={{ base: "95%", sm: "80%", lg: "600px" }}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
              {activeStep === 0 && (
                <PetInformationForm
                  activeStep={activeStep}
                  nextStep={next}
                  prevStep={prev}
                />
              )}
              {activeStep === 1 && (
                <TraitsInterestsForm nextStep={next} prevStep={prev} />
              )}

              {activeStep === 2 && (
                <ConfirmationForm nextStep={next} prevStep={prev} />
              )}
            </form>
          </FormProvider>
        </Box>
      </Box>
    </Flex>
  );
}
