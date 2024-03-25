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
  Icon,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { SiTinder } from "react-icons/si";
import BottomCardForm from "../card";
import { signInSchema, TSignInSchema } from "@/app/lib/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSubmitForm } from "../buttons";

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
            <Icon as={SiTinder} boxSize={24} color={"red.500"} />

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
                      {errors.password && <p>{`${errors.password.message}`}</p>}
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