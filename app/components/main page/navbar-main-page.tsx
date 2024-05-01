"use client";

import {
  useDisclosure,
  chakra,
  Flex,
  HStack,
  VStack,
  IconButton,
  Box,
  CloseButton,
  Button,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";

import tindog from "@/public/tindog.svg";
import { Link } from "@chakra-ui/next-js";
import { GrServices } from "react-icons/gr";
import {
  MdContactSupport,
  MdOutlinePriceCheck,
  MdReviews,
} from "react-icons/md";

export default function NavbarMainPage() {
  const mobileNav = useDisclosure();
  return (
    <>
      <chakra.header
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        sx={{
          zIndex: 999,
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0), 30%, rgba(0, 0, 0, 1) 80%)",
        }}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={"white"}
                spacing={3}
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<GrServices />}>
                  Features
                </Button>
                <Button w="full" variant="ghost" leftIcon={<MdReviews />}>
                  Testimonies y Reviews
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<MdOutlinePriceCheck />}
                >
                  Pricing
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<MdContactSupport />}
                >
                  Support
                </Button>
              </VStack>
            </Box>

            <Link
              href="/"
              display={"flex"}
              alignItems="center"
              textDecoration={"none"}
              _hover={{ textDecoration: "none" }}
            >
              <Image
                src={tindog}
                alt="Logo de Tindog"
                width={25}
                priority={true}
                height={25}
              />
              <Heading
                as={"h1"}
                ml={2}
                fontWeight="600"
                color="white"
                fontSize={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
              >
                tinderpet
              </Heading>
            </Link>

            <HStack
              ml={3}
              spacing={2}
              display={{
                base: "none",
                md: "flex",
              }}
              alignItems="center"
            >
              <Button
                variant="ghost"
                leftIcon={<GrServices />}
                size="lg"
                color={"white"}
                _hover={{ color: "white", bg: "pink.500" }}
                px={2}
              >
                Features
              </Button>
              <Button
                variant="ghost"
                leftIcon={<MdReviews />}
                size="lg"
                color={"white"}
                _hover={{ color: "white", bg: "pink.500" }}
                px={2}
              >
                Testimonies
              </Button>
              <Button
                variant="ghost"
                leftIcon={<MdOutlinePriceCheck />}
                size="lg"
                color={"white"}
                _hover={{ color: "white", bg: "pink.500" }}
                px={2}
              >
                Pricing
              </Button>
              <Button
                variant="ghost"
                leftIcon={<MdContactSupport />}
                size="lg"
                color={"white"}
                _hover={{ color: "white", bg: "pink.500" }}
                px={2}
              >
                Support
              </Button>
            </HStack>
          </HStack>

          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <Link href="/sign-in">
              <Button
                variant="ghost"
                leftIcon={<AiOutlineInbox />}
                size={{ base: "sm", md: "md" }}
                w="100%"
                color={"white"}
                bg={"pink.500"}
                _hover={{ bg: "pink.700" }}
                px={3}
              >
                Sign In
              </Button>
            </Link>
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
}
