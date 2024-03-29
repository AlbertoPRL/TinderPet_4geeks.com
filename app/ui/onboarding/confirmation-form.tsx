import { PropsForms } from "@/app/lib/types";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export default function ConfirmationForm({
  activeStep,
  nextStep,
  prevStep,
  isLastStep,
  hasCompletedAllSteps,
}: PropsForms) {
  return (
    <Flex h={"100%"} flexDir={"column"} justifyContent={"space-between"}>
      <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
        Please review your pet's profile before submitting.
      </Heading>

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
    </Flex>
  );
}
