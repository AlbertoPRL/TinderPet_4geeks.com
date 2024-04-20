import { Flex } from "@chakra-ui/react";
import { Metadata } from "next";

import SignInForm from "@/app/components/ui/sign-in/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <SignInForm />
      </Flex>
    </div>
  );
}
