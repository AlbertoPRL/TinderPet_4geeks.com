"use client";

import { Box, Flex, useSteps } from "@chakra-ui/react";
import Steps from "../ui/onboarding/steps";
import OnboardingForm from "../ui/onboarding/onboarding-form";

const steps = [
  { title: "Step 1", description: "User Information" },
  { title: "Step 2", description: "Pet Information" },
  { title: "Step 3", description: "Preferences" },
  { title: "Step 4", description: "Confirmation" },
];

export default function OnboardingPage() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <Box
          background={"gray.200"}
          p={4}
          borderRadius={6}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Steps
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <OnboardingForm step={activeStep} />
        </Box>
      </Flex>
    </div>
  );
}
