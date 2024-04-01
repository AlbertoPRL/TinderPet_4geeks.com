import { Box, Heading, Text } from "@chakra-ui/react";
import ConfirmationForm from "./confirmation-form";
import PetInformationForm from "./pet-information-form";
import PreferencesForm from "./preferences-form";
import UserInformationForm from "./user-information-form";
import { PropsForms } from "@/app/lib/schema";
import TraitsInterestsForm from "./traits-interests-form";

export default function OnboardingForm({
  step,
  activeStep,
  nextStep,
  prevStep,
  hasCompletedAllSteps,
}: PropsForms) {
  function RenderFormByStep() {
    switch (step) {
      case 0:
        return (
          <UserInformationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
          />
        );

      case 1:
        return (
          <PetInformationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
          />
        );

      case 2:
        return (
          <TraitsInterestsForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            // isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );

      case 3:
        return (
          <PreferencesForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            // isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );

      case 4:
        return (
          <ConfirmationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            // isLastStep={isLastStep}
            hasCompletedAllSteps={hasCompletedAllSteps}
          />
        );
      default:
        return (
          <UserInformationForm
            nextStep={nextStep}
            prevStep={prevStep}
            activeStep={activeStep}
            // isLastStep={isLastStep}
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
      maxW={"30em"}
      minH="500px"
      display={"flex"}
      flexDirection={"column"}
      justifyContent="space-between"
      alignItems="stretch"
    >
      {hasCompletedAllSteps ? (
        <Box
          h="100%"
          sx={{ rounded: "md" }}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize="xx-large" textAlign={"center"}>
            Woohoo! All steps completed! 🎉
          </Heading>
          <Text>Thank you for creating your pet profile!</Text>
        </Box>
      ) : (
        <RenderFormByStep />
      )}
    </Box>
  );
}
