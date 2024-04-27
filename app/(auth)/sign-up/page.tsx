import { Metadata } from "next";
import { Flex } from "@chakra-ui/react";

import SignUpForm from "@/app/components/sign-up/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <SignUpForm />
      </Flex>
    </div>
  );
}
