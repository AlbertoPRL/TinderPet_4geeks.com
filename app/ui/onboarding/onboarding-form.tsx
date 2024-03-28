import { Box, Heading } from "@chakra-ui/react";
import ConfirmationForm from "./confirmation-form";
import PetInformationForm from "./pet-information-form";
import PreferencesForm from "./preferences-form";
import UserInformationForm from "./user-information-form";

export default function OnboardingForm({
  step,
  activeStep,
  nextStep,
  prevStep,
  isLastStep,
  hasCompletedAllSteps,
}: {
  step: number;
  activeStep: number;
  nextStep: () => void;
  prevStep: () => void;
  isLastStep: boolean;
  hasCompletedAllSteps: boolean;
}) {
  function RenderFormByStep() {
    switch (step) {
      case 0:
        return (
          <UserInformationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );

      case 1:
        return (
          <PetInformationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );

      case 2:
        return (
          <PreferencesForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );
      case 3:
        return (
          <ConfirmationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );
      default:
        return (
          <UserInformationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );
    }
  }
  return (
    <Box
      background={"white"}
      borderRadius="md"
      p={6}
      boxShadow="lg"
      w="full"
      maxW={{ lg: "30em" }}
    >
      {hasCompletedAllSteps ? (
        <Box sx={{ my: 8, p: 8, rounded: "md" }}>
          <Heading fontSize="xl" textAlign={"center"}>
            Woohoo! All steps completed! 🎉
          </Heading>
        </Box>
      ) : (
        <RenderFormByStep />
      )}
    </Box>
  );
}
