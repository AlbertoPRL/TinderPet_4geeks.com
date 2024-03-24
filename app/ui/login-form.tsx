"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { truncate } from "fs";
import { useState } from "react";
import { SiTinder } from "react-icons/si";

export default function LoginForm() {
  const [signup, setSignUp] = useState(false);

  return (
    <Box>
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8">
            {/* TinderPet icon */}
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
              <form>
                <Stack spacing="4">
                  <FormControl>
                    <FormLabel size="sm">Username or email address</FormLabel>
                    <Input
                      type="text"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                  </FormControl>

                  <FormControl>
                    <HStack justify="space-between">
                      <FormLabel size="sm">Password</FormLabel>
                      {/* <Button
                        as="a"
                        href="#"
                        variant="link"
                        size="xs"
                        color="#0969da"
                        fontWeight="500"
                      >
                        Forgot password?
                      </Button> */}
                    </HStack>
                    <Input
                      type="password"
                      bg="white"
                      borderColor="#d8dee4"
                      size="sm"
                      borderRadius="6px"
                    />
                  </FormControl>
                  {signup && (
                    <FormControl>
                      <HStack justify="space-between">
                        <FormLabel size="sm">Confirm Password</FormLabel>
                      </HStack>
                      <Input
                        type="password"
                        bg="white"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                      />
                    </FormControl>
                  )}

                  {!signup ? (
                    <Button
                      bg="red.500"
                      _hover={{ background: "red.700", boxShadow: "none" }}
                      color="white"
                      size="sm"
                    >
                      Sign In
                    </Button>
                  ) : (
                    <Button
                      bg="red.500"
                      _hover={{ background: "red.700", boxShadow: "none" }}
                      color="white"
                      size="sm"
                    >
                      Sign Up
                    </Button>
                  )}
                </Stack>
              </form>
            </CardBody>
          </Card>

          {!signup ? (
            <Card variant="outline" borderColor="#d0d7de">
              <CardBody>
                <Center>
                  <HStack fontSize="sm" spacing="1">
                    <Text>New to TinderPet?</Text>
                    <Button
                      color="#0969da"
                      fontSize={"sm"}
                      bg={"transparent"}
                      p={0}
                      _hover={{ background: "none" }}
                      onClick={() => setSignUp(true)}
                    >
                      Create an account.
                    </Button>
                  </HStack>
                </Center>
              </CardBody>
            </Card>
          ) : null}
        </Stack>
      </Center>
    </Box>
  );
}
