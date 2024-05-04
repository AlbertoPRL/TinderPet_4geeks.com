import { Box, Button, Heading, Text } from "@chakra-ui/react";

import styles from "./page.module.css";
import NavbarMainPage from "./components/main page/navbar-main-page";
import Link from "next/link";
import Features from "./components/main page/features";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.navbar}>
        <div className={styles.img}></div>
        <NavbarMainPage />
      </section>

      <section className={styles.container_text}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={1}
        >
          <Heading
            as="h1"
            color={"white"}
            fontWeight="bold"
            fontSize={{ base: "2rem", sm: "3.5rem", md: "5rem" }}
            textAlign={"center"}
          >
            Welcome to TinderPet
          </Heading>
          <Link href="/sign-up">
            <Button
              variant="solid"
              fontSize={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
              p={{ base: 6, sm: 8, md: 10 }}
              rounded={"full"}
              color={"white"}
              bg={"pink.500"}
              _hover={{ bg: "pink.700" }}
            >
              <Text p={2}>Get Started </Text>
            </Button>
          </Link>
        </Box>
      </section>
      {/* <section>
        <Features />
      </section> */}
    </main>
  );
}
