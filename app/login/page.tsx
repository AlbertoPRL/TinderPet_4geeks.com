import { Flex } from "@chakra-ui/react";
import LoginForm from "../ui/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Loginpage() {
  return (
    <div>
      <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
        <LoginForm />
      </Flex>
    </div>
  );
}
