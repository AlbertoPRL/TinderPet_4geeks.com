"use client";

import React, { useEffect, useRef, useState } from "react";
import MessageInput from "./MessageInput";
import { Flex, HStack, IconButton, Stat, StatLabel, StatNumber, VStack } from "@chakra-ui/react";
import { useStore } from "@/app/lib/hooks/zustandHook";
import { useConversationStore } from "@/app/lib/stores/conversationStore";
import { useUserStore } from "@/app/lib/stores/userStore";
import Message from "./Message";
import Connector from "../../lib/services/signalRConnection";
import { MessageDto } from "@/app/lib/types/Dtos/conversationsDto";
import { usePetStore } from "@/app/lib/stores/petStore";
import { HiChat } from "react-icons/hi";
import { IoDocuments } from "react-icons/io5";

const containerStyle: React.CSSProperties = {
  overflowY: "scroll", 
  msOverflowStyle: "none", 
  scrollbarWidth: "none", 
};

type Props = {
  onChatSideBarOpen: () => void;
  onChatFilesOpen: () => void;
};

export default function Chat({ onChatSideBarOpen, onChatFilesOpen }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const conversationState = useStore(useConversationStore, (state) => state);
  const petState = useStore(usePetStore, (state) => state);
  const [messages, setMessages] = useState(conversationState?.selectedConversation?.messages);
  const { events } = Connector();

  useEffect(() => {
    const handleEvent = (message: string, groupId: string, date: string, receiverId: string) => {
      const newMessage: MessageDto = {
        text: message,
        creationDate: date,
        receiverUserId: receiverId,
        messageState: "",
      };
      setMessages(prevMessages => [...(prevMessages || []), newMessage]);
    };
    events(handleEvent);
  }, []);

  useEffect(() => {
    setMessages(conversationState?.selectedConversation?.messages);
  }, [conversationState?.selectedConversation?.messages]);


  return (
    <Flex w="full" flexDirection="column">
      <Flex
        ref={containerRef}
        style={containerStyle}
        w="full"
        overflowY="scroll"
        flexDirection="column"
        flex={1}
        alignSelf={"flex-start"}
      >
        <HStack px={4} py={4} borderBottomColor='gray.100' borderBottomWidth={1} justifyContent="space-between">
          <IconButton
            onClick={onChatSideBarOpen}
            display={{ base: "inherit", lg: "none" }}
            icon={<HiChat />}
            aria-label="Toggle Chat History Drawer"
          />
          <IconButton
            alignSelf="flex-end"
            onClick={onChatFilesOpen}
            display={{ base: "inherit"}}
            icon={<IoDocuments />}
            aria-label="Toggle Chat Files Drawer"
          />
        </HStack>
        <Stat mt={1}>
          <StatLabel color="gray.500">Chatting With</StatLabel>
          <StatNumber>
            {conversationState?.selectedConversation?.pet1.id === petState?.userSelectedPet?.id
              ? conversationState?.selectedConversation?.pet2.user.firstName
              : conversationState?.selectedConversation?.pet1.user.firstName}
          </StatNumber>
          <StatLabel color="gray.500">Owner Of</StatLabel>
          <StatNumber>
            {conversationState?.selectedConversation?.pet1.id === petState?.userSelectedPet?.id
              ? conversationState?.selectedConversation?.pet2.name
              : conversationState?.selectedConversation?.pet1.name}
          </StatNumber>
        </Stat>
        {messages && messages.map((message, index) => (
          <Message
            key={index}
            message={message?.text}
            isCurrentPet={message.receiverUserId === petState?.userSelectedPet?.id}
            dateSent={message.creationDate}
          />
        ))}
      </Flex>
      <MessageInput
      />
    </Flex>
  );
}