"use client";

import {
  Box,
  Card,
  CardBody,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { ButtonSubmitForm } from "../buttons";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import BottomCardForm from "../card";
import tindog from "@/public/tindog.svg";
import Image from "next/image";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    console.log("submitted", data);
    await new Promise((r) => setTimeout(r, 1000)); //
    reset();
  };
  return (
    <Box>
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8">
            <Image
              src={tindog}
              alt="Logo de Tindog"
              width={80}
              priority={true}
            />

            <Heading
              as="h1"
              fontWeight="300"
              fontSize="24px"
              letterSpacing="-0.5px"
            >
              Sign up to TinderPet
            </Heading>
          </VStack>
          <Card bg="#f6f8fa" variant="outline" borderColor="#d8dee4" w="308px">
            <CardBody>
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
                      {errors.email && errors.email.message}
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
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                  </FormControl>

                  {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore */}
                  <FormControl isInvalid={errors.confirmPassword}>
                    <FormLabel size="sm">Confirm Password</FormLabel>
                    <Input
                      type="password"
                      {...register("confirmPassword")}
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword && errors.confirmPassword.message}
                    </FormErrorMessage>
                  </FormControl>

                  <ButtonSubmitForm disabled={isSubmitting} text={"Sign Up"} />
                </Stack>
              </form>
            </CardBody>
          </Card>
          <BottomCardForm
            text="Have an account?"
            href="/sign-in"
            textLink="Log in instead"
          />
        </Stack>
      </Center>
    </Box>
  );
}
