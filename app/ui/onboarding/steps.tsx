"use client";

import { StepsInterface } from "@/app/lib/schema";
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
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { MdPets } from "react-icons/md";

export default function Steps({
  steps,
  activeStep,
  setActiveStep,
}: {
  steps: StepsInterface[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isLowerThan992] = useMediaQuery("(max-width: 992px)", {
    ssr: true,
    fallback: false,
  });

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
      <Stepper
        index={activeStep}
        colorScheme="pink"
        orientation={!isLowerThan992 ? "vertical" : "horizontal"}
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

            {!isLowerThan992 ? (
              <Box ps={1} width={"120px"} flexShrink="0" textAlign={"left"}>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
            ) : null}

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      {isLowerThan992 && textStep()}
    </Box>
  );
}
