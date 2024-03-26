import {
  Box,
  Step,
  StepDescription,
  StepIcon,
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
  steps: { title: string; description?: string }[];
  activeStep: number;
  setActiveStep: (step: number) => void;
}) {
  return (
    <Box background={"gray"} borderRadius="10px" p={6}>
      <Stepper
        index={activeStep}
        colorScheme="pink"
        orientation="vertical"
        height="400px"
        gap="0"
      >
        {steps?.map((step, index) => (
          <Step as="button" key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepStatus
                // complete={<StepIcon />}
                complete={<MdPets />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box ps={1} flexShrink="0" textAlign={"left"}>
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
