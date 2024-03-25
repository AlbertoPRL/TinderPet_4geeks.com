import { Flex } from "@chakra-ui/react";
import SignInForm from "../ui/sign-in/sign-in-form";
import { Metadata } from "next";

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
