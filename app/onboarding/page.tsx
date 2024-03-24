"use client";

import { Flex, useSteps } from "@chakra-ui/react";
import Steps from "../ui/onboarding/steps";
import OnboardingForm from "../ui/onboarding/onboarding-form";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

export default function OnboardingPage() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <Steps
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <OnboardingForm step={activeStep} />
      </Flex>
    </div>
  );
}
