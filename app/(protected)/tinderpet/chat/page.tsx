"use client";

import { HStack, Flex, useDisclosure } from "@chakra-ui/react";
import Chat from "../../../components/chat/Chat";
import ChatSideBar from "../../../components/chat/ChatSideBar";
import { useAuthStore } from "../../../lib/stores/authStore";
import { usePetStore } from "@/app/lib/stores/petStore";
import { useConversationStore } from "@/app/lib/stores/conversationStore";
import { useEffect } from "react";
import { useStore } from "@/app/lib/hooks/zustandHook";
import ChatFilesDrawer from "../../../components/chat/ChatFilesDrawer";
import ChatSideBarDrawer from "../../../components/chat/ChatSideBarDrawer";


export default function ChatView() {
  const authStore = useStore(useAuthStore, (state) => state);
  const conversationState = useStore(useConversationStore, (state) => state);
  const selectedPet = useStore(usePetStore, (state) => state.userSelectedPet);

  const {
    isOpen: isChatSideBarOpen,
    onOpen: onChatSideBarOpen,
    onClose: onChatSideBarClose,
  } = useDisclosure({defaultIsOpen: !conversationState?.selectedConversation ? true : false});

  const {
    isOpen: isChatFilesOpen,
    onOpen: onChatFilesOpen,
    onClose: onChatFilesClose,
  } = useDisclosure({defaultIsOpen: false});

  useEffect(() => {    
    conversationState?.fetchConversations(authStore?.token, selectedPet?.id );
    console.log(authStore?.token);
  }, [authStore?.token, selectedPet?.id]);

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
        pt={0}
      >
        <ChatSideBar />
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        {conversationState && conversationState.selectedConversation ? <Chat onChatSideBarOpen={onChatSideBarOpen} onChatFilesOpen={onChatFilesOpen}/> : <></>}
      </Flex>
      {/* <Flex
        as="aside"
        h="full"
        maxW={{ base: "xs", xl: "sm" }}
        display={{ base: "none", lg: "flex" }}
        w="full"
      >
        <ChatFiles onChatFilesBarOpen={onChatFilesOpen}  onChatFilesClose={onChatFilesClose}></ChatFiles>
      </Flex> */}

      <ChatSideBarDrawer isOpen={isChatSideBarOpen} onClose={onChatSideBarClose} />
      <ChatFilesDrawer isOpen={isChatFilesOpen} onClose={onChatFilesClose} />
    </HStack>
  );
}
