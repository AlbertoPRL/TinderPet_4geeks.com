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
import BottomCardForm from "../card";
import { signInSchema, TSignInSchema } from "@/app/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSubmitForm } from "../buttons";
import tindog from "@/public/tindog.svg";
import Image from "next/image";

export default function SignInForm() {
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
              Sign in to TinderPet
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

                  <ButtonSubmitForm disabled={isSubmitting} text={"Sign In"} />
                </Stack>
              </form>
            </CardBody>
          </Card>

          <BottomCardForm
            text="New to TinderPet?"
            href="/sign-up"
            textLink="Create an account"
          />
        </Stack>
      </Center>
    </Box>
  );
}
