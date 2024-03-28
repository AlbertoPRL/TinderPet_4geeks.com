import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export default function ConfirmationForm({
  activeStep,
  nextStep,
  prevStep,
  isLastStep,
  hasCompletedAllSteps,
}: {
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isLastStep: boolean;
  hasCompletedAllSteps: boolean;
}) {
  return (
    <div>
      <p>Thank you for creating your pet profile!</p>
      <p>
        An email with your pet's info and the next steps will be sent to you
        shortly.
      </p>
      <Flex width="100%" justify="flex-end" gap={4}>
        {!hasCompletedAllSteps ? (
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </>
        ) : null}
      </Flex>
    </div>
  );
}
