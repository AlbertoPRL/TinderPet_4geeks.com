"use client";

import { Steps } from "@/app/lib/types";
import {
  Box,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
} from "@chakra-ui/react";
import { MdPets } from "react-icons/md";

export default function StepsMobile({
  steps,
  activeStep,
  setActiveStep,
}: {
  steps: Steps[];
  activeStep: number;
  setActiveStep: (step: number) => void;
}) {
  const activeStepText = steps[activeStep].description;
  return (
    <Box background={"gray"} borderRadius="10px" p={6}>
      <Stepper
        index={activeStep}
        colorScheme="pink"
        height={{ base: "", lg: "400px" }}
        gap="0"
        mb={2}
      >
        {steps?.map((step, index) => (
          <Step as="button" key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                complete={<MdPets />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Text>
        Step {activeStep + 1}: <b>{activeStepText}</b>
      </Text>
    </Box>
  );
}
