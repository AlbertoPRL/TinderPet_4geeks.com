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
import { ButtonSubmitForm } from "../buttons";
import { useForm } from "react-hook-form";
import { TSignUpSchema, signUpSchema } from "@/app/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import BottomCardForm from "../card";
import { SiTinder } from "react-icons/si";

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
            <Icon as={SiTinder} boxSize={24} color={"red.500"} />

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
                      {errors.confirmPassword && (
                        <p>{`${errors.confirmPassword.message}`}</p>
                      )}
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
