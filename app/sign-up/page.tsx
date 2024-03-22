import { Flex } from "@chakra-ui/react";
import SignUpForm from "../ui/sign-up-form";
import { Metadata } from "next";

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
