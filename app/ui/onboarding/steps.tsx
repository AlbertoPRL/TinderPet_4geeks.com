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
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps?.map((step, index) => (
        <Step as="button" key={index} onClick={() => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
