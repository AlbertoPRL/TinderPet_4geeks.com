import { Flex } from "@chakra-ui/react";
import OnboardingForm from "../ui/onboarding/onboarding-form";

export default function OnboardingPage() {
  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <OnboardingForm />
      </Flex>
    </div>
  );
}
