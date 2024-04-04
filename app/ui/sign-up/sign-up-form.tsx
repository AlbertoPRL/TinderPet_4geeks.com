"use client";

import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
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
import ErrorMessage from "../onboarding/error-message";

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
                  <Box>
                    <Flex gap={4}>
                      <FormControl isInvalid={errors.firstName ? true : false}>
                        <FormLabel m={0} size="sm">
                          First Name
                        </FormLabel>
                        <Input
                          type="text"
                          {...register("firstName")}
                          bg="white"
                          borderColor="#d8dee4"
                          size="sm"
                          rounded="md"
                          shadow="sm"
                          mt={1}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel m={0} size="sm">
                          Last Name
                        </FormLabel>
                        <Input
                          type="text"
                          {...register("lastName")}
                          bg="white"
                          borderColor="#d8dee4"
                          size="sm"
                          rounded="md"
                          shadow="sm"
                          mt={1}
                        />
                      </FormControl>
                    </Flex>
                    {errors.firstName && (
                      <ErrorMessage message={errors.firstName.message} />
                    )}
                  </Box>

                  <FormControl isInvalid={errors.email ? true : false}>
                    <FormLabel m={0} size="sm">
                      Email address
                    </FormLabel>
                    <Input
                      type="email"
                      {...register("email")}
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      rounded="md"
                      shadow="sm"
                      mt={1}
                    />
                    {errors.email && (
                      <ErrorMessage message={errors.email.message} />
                    )}
                  </FormControl>

                  <FormControl isInvalid={errors.password ? true : false}>
                    <FormLabel m={0} size="sm">
                      Password
                    </FormLabel>

                    <Input
                      type="password"
                      {...register("password")}
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      rounded="md"
                      shadow="sm"
                      mt={1}
                    />

                    {errors.password && (
                      <ErrorMessage message={errors.password.message} />
                    )}
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
