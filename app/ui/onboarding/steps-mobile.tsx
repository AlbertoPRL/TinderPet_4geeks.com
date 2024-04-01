"use client";

import { StepsInterface } from "@/app/lib/schema";
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
  steps: StepsInterface[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const textStep = () => {
    if (activeStep <= steps?.length - 1) {
      const activeStepText = steps[activeStep].description;

      return (
        <Text>
          Step {activeStep + 1}: <b>{activeStepText}</b>
        </Text>
      );
    }
    return (
      <Text>
        Step {steps.length}: <b>{steps[steps.length - 1].description}</b>
      </Text>
    );
  };

  return (
    <Box background={"gray"} borderRadius="10px" p={6}>
      <Stepper index={activeStep} colorScheme="pink" gap="0" mb={2}>
        {steps?.map((_, index) => (
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
      {textStep()}
    </Box>
  );
}
