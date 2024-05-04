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
import { signInSchema, TSignInSchema } from "@/app/lib/types/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ButtonSubmitForm } from "../buttons";
import tindog from "@/public/tindog.svg";

import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";

export default function SignInForm() {
  const route = useRouter();
  const store = useStore(useAuthStore, (state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: TSignInSchema) => {
    await store?.login(data);

    reset();
    route.push("/tinderpet/pet-selector");
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
          <Card w="308px" shadow={"none"}>
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="4">
                  <FormControl isInvalid={errors.email ? true : false}>
                    <FormLabel m={0} size="sm">
                      Email address
                    </FormLabel>
                    <Input
                      type="email"
                      {...register("email")}
                      bg="white"
                      borderColor="#d8dee4"
                      autoComplete="email"
                      size="sm"
                      rounded="md"
                      shadow="sm"
                      mt={1}
                    />
                    <FormErrorMessage fontSize="x-small">
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
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
                    <FormErrorMessage fontSize="x-small">
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
