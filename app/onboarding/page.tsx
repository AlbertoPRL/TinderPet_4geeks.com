"use client";

import { Box, Flex, useMediaQuery, useSteps } from "@chakra-ui/react";
import Steps from "../ui/onboarding/steps";
import OnboardingForm from "../ui/onboarding/onboarding-form";
import StepsMobile from "../ui/onboarding/steps-mobile";
import {
  FormDataType,
  FormSchema,
  PetInfoType,
  StepsInterface,
  UserInfoType,
  petInfoSchema,
  userInformationSchema,
} from "../lib/schema";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  { title: "Step 2", description: "Pet Information" },
  { title: "Step 3 ", description: "Personality Traits & Interests" },
  { title: "Step 4", description: "Preferences" },
  { title: "Step 5", description: "Confirmation" },
];

export default function OnboardingPage() {
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps?.length,
  });

  const isLastStep = activeStep === steps?.length - 1;
  const hasCompletedAllSteps = activeStep === steps?.length;

  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  const [isLowerThan992] = useMediaQuery("(max-width: 992px)");

  // const INITIAL_VALUES = [{} as UserInfoType, {} as PetInfoType] as [
  //   UserInfoType,
  //   PetInfoType
  // ];
  //   userInfo: userInformationSchema,
  //   petInfo: {},
  //   personalityTraits: {},
  //   preferences: {},
  // };

  // type FormValues = {
  //   userInfo: UserInfoType;
  //   petInfo: PetInfoType;
  //   personalityTraits: {};
  //   preferences: {};
  // };

  const methods = useForm<FormDataType>({
    // resolver: zodResolver(schemaArr[activeStep]!),
    // defaultValues: INITIAL_VALUES,
    resolver: zodResolver(FormSchema),
  });

  const { handleSubmit, trigger } = methods;

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
    //   // if (!hasCompletedAllSteps) {
    //   //   goToNext();
    //   // }
    //   if (activeStep === steps.length - 1) {
    //     // handle submission here
    //   }
    //   goToNext();
  };
  type FieldName = keyof FormDataType;

  const next = async () => {
    const fields = steps[activeStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (activeStep < steps.length - 1) {
      if (activeStep === steps.length - 2) {
        await handleSubmit(onSubmit)();
      }
      goToNext();
    }
  };

  const prev = () => {
    if (activeStep > 0) {
      goToPrevious();
    }
  };

  return (
    <div>
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
          {isLargerThan992 && (
            <Steps
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          )}
          {isLowerThan992 && (
            <StepsMobile
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          )}
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <OnboardingForm
                step={activeStep}
                activeStep={activeStep}
                isLastStep={isLastStep}
                nextStep={goToNext}
                prevStep={goToPrevious}
                hasCompletedAllSteps={hasCompletedAllSteps}
              />
            </form>
          </FormProvider>
        </Box>
      </Flex>
    </div>
  );
}
