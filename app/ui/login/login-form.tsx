"use client";

import {
  Alert,
  AlertIcon,
  Box,
  Card,
  CardBody,
  Center,
  CloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { SiTinder } from "react-icons/si";
import CardLoginForm from "./card";
import { signInSchema, TSignInSchema } from "@/app/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSubmitForm } from "../buttons";
import SignUpForm from "./sign-up-form";

export default function LoginForm() {
  const [signup, setSignUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: TSignInSchema) => {
    console.log("submitted", data);
    await new Promise((r) => setTimeout(r, 1000)); //
    reset();
  };

  return (
    <Box>
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8">
            <Icon as={SiTinder} boxSize={24} color={"red.500"} />

            <Heading
              as="h1"
              fontWeight="300"
              fontSize="24px"
              letterSpacing="-0.5px"
            >
              {!signup ? "Sign in" : "Sign up"} to TinderPet
            </Heading>
          </VStack>
          <Card bg="#f6f8fa" variant="outline" borderColor="#d8dee4" w="308px">
            <CardBody>
              {!signup ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing="4">
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
                    <FormControl isInvalid={errors.email}>
                      <FormLabel size="sm">Email address</FormLabel>
                      <Input
                        type="email"
                        {...register("email")}
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                      />
                      <FormErrorMessage>
                        {errors.email && <p>{`${errors.email.message}`}</p>}
                      </FormErrorMessage>
                    </FormControl>

                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
                    <FormControl isInvalid={errors.password}>
                      <FormLabel size="sm">Password</FormLabel>
                      <Input
                        type="password"
                        {...register("password")}
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                      />
                      <FormErrorMessage>
                        {errors.password && (
                          <p>{`${errors.password.message}`}</p>
                        )}
                      </FormErrorMessage>
                    </FormControl>

                    <ButtonSubmitForm
                      disabled={isSubmitting}
                      text={"Sign In"}
                    />
                  </Stack>
                </form>
              ) : (
                <SignUpForm />
              )}
            </CardBody>
          </Card>

          {!signup ? (
            <CardLoginForm
              onClick={() => {
                setSignUp(true);
                reset();
              }}
              text="New to TinderPet?"
              textLink="Create an account"
            />
          ) : (
            <CardLoginForm
              onClick={() => {
                setSignUp(false);
                reset();
              }}
              text="Have an account?"
              textLink="Log in instead"
            />
          )}
        </Stack>
      </Center>
    </Box>
  );
}
