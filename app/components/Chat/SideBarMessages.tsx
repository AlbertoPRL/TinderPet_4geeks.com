import { useConversationStore } from "@/app/lib/stores/conversationStore";
import { Avatar, AvatarGroup, HStack, Text, VStack } from "@chakra-ui/react";
import { use } from "react";

type SideBarMessagesProps = {
    name: string;
    lastMessagePreview: string;
    creationDate: string;
};

export default function SideBarMessages({ name, lastMessagePreview, creationDate }: SideBarMessagesProps) {

    return (
        <HStack maxWidth="full" overflow="hidden">
            <AvatarGroup size='md' max={2}>
                <Avatar name={name} src='https://bit.ly/ryan-florence' />
                <Avatar name={name} src='https://bit.ly/sage-adebayo' />
            </AvatarGroup>
            <VStack justify="start" align="start">
                <Text isTruncated fontSize='xs' fontWeight="bold" color='gray.500'>{name} </Text>
                <Text isTruncated fontSize='xs' color='gray.500'>{lastMessagePreview}</Text>
            </VStack>
        </HStack>
    )
};