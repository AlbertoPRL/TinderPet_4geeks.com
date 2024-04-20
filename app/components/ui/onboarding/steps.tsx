import { StepsInterface } from "@/app/lib/types/schema";
import {
  Box,
  Card,
  CardBody,
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
  steps: StepsInterface[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Card w={"200px"} variant="outline" borderColor="#d0d7de">
      <CardBody>
        <Stepper
          h={"full"}
          index={activeStep}
          colorScheme="pink"
          orientation="vertical"
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

              <Box flexShrink="0" ps={1} textAlign={"left"}>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </CardBody>
    </Card>
  );
}
