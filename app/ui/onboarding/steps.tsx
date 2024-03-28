"use client";

import { Steps } from "@/app/lib/types";
import {
  Box,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";
import { MdPets } from "react-icons/md";

export default function Steps({
  steps,
  activeStep,
  setActiveStep,
}: {
  steps: Steps[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Box background={"gray"} borderRadius="10px" p={6}>
      <Stepper
        index={activeStep}
        colorScheme="pink"
        orientation="vertical"
        minH={{ base: "", lg: "430px" }}
        gap="0"
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

            <Box ps={1} pe={6} flexShrink="0" textAlign={"left"}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
