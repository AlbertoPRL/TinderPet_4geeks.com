import { StepsInterface } from "@/app/lib/types/schema";
import {
  Card,
  CardBody,
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
        <Text mt={8}>
          Step {activeStep + 1}: <b>{activeStepText}</b>
        </Text>
      );
    }
    return (
      <Text mt={8}>
        Step {steps.length}: <b>{steps[steps.length - 1].description}</b>
      </Text>
    );
  };

  return (
    <Card shadow={"none"} w={{ base: "95%", sm: "80%" }} h={32}>
      <CardBody>
        <Stepper index={activeStep} colorScheme="pink" mb={2}>
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
      </CardBody>
    </Card>
  );
}
