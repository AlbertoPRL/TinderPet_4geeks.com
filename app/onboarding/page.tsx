"use client";

import { Box, Flex, useMediaQuery, useSteps } from "@chakra-ui/react";
import Steps from "../ui/onboarding/steps";
import OnboardingForm from "../ui/onboarding/onboarding-form";
import StepsMobile from "../ui/onboarding/steps-mobile";
import { StepsInterface } from "../lib/types";

const steps: Array<StepsInterface> = [
  { title: "Step 1", description: "User Information" },
  { title: "Step 2", description: "Pet Information" },
  { title: "Step 3 ", description: "Personality Traits & Interests" },
  { title: "Step 4", description: "Preferences" },
  { title: "Step 5", description: "Review and Submit" },
];

export default function OnboardingPage() {
  const { activeStep, setActiveStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps?.length,
  });

  const isLastStep = activeStep === steps?.length - 1;
  const hasCompletedAllSteps = activeStep === steps?.length;

  const [isLargerThan992] = useMediaQuery("(min-width: 992px)", {
    ssr: false,
  });

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
          {isLargerThan992 ? (
            <Steps
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          ) : (
            <StepsMobile
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          )}

          <OnboardingForm
            step={activeStep}
            activeStep={activeStep}
            isLastStep={isLastStep}
            nextStep={goToNext}
            prevStep={goToPrevious}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        </Box>
      </Flex>
    </div>
  );
}
