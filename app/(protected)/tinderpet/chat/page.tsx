"use client";

import { HStack, Flex, Button } from "@chakra-ui/react";

import ChatSideBar from "@/app/components/chat/ChatSideBar";
import Chat from "@/app/components/chat/Chat";
import ChatFiles from "@/app/components/chat/ChatFiles";

import { useStore } from "@/app/lib/hooks/zustandHook";

import { useAuthStore } from "@/app/lib/stores/authStore";
import { useUserStore } from "@/app/lib/stores/userStore";
import { usePetStore } from "@/app/lib/stores/petStore";
import { LogoutButton } from "@/app/components/buttons";

export default function ChatView() {
  const authStore = useStore(useAuthStore, (state) => state);
  const store = useStore(useUserStore, (state) => state);
  const petStore = useStore(usePetStore, (state) => state);

  const hanfleFn = async () => {
    const token = authStore?.token;

    const user = await store?.fetchUser(token);
    const pet = await petStore?.fetchPets(token);

    console.log("user", user);
    console.log("pet", pet);
  };

  return (
    <HStack h="100vh" spacing={0}>
      <Flex
        as="aside"
        h="full"
        flexDirection={"column"}
        maxW={{ base: "xs", xl: "sm" }}
        display={{ base: "none", lg: "flex" }}
        w="full"
        borderRightColor="gray.100"
        borderRightWidth={1}
        pt={8}
      >
        <ChatSideBar />

        <Button onClick={hanfleFn}>Console Log</Button>
        <LogoutButton />
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        <Chat />
      </Flex>
      <Flex
        as="aside"
        h="full"
        maxW={{ base: "xs", xl: "sm" }}
        display={{ base: "none", lg: "flex" }}
        w="full"
      >
        <ChatFiles />
      </Flex>
    </HStack>
  );
}
