import { Flex } from "@chakra-ui/react";
import SignInPage from "../ui/sign-in-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Loginpage() {
  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <SignInPage />
      </Flex>
    </div>
  );
}
