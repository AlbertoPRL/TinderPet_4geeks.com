"use client";

import React, { useEffect } from "react";
import { HStack, Flex, Button } from "@chakra-ui/react";
import Chat from "../../../components/chat/Chat";
import ChatFiles from "../../../components/chat/ChatFiles";
import ChatSideBar from "../../../components/chat/ChatSideBar";

import { useAuthStore } from "../../../lib/stores/authStore";
import { useUserStore } from "@/app/lib/stores/userStore";
import { useStore } from "@/app/lib/hooks/zustandHook";

export default function ChatView() {
  const authStore = useStore(useAuthStore, (state) => state);
  const store = useStore(useUserStore, (state) => state);

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
        <Button onClick={() => authStore?.logout()}>Logout</Button>
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
        <ChatFiles></ChatFiles>
      </Flex>
    </HStack>
  );
}
