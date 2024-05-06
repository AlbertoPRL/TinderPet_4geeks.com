import { useStore } from "@/app/lib/hooks/zustandHook";
import { useConversationStore } from "@/app/lib/stores/conversationStore";
import { useUserStore } from "@/app/lib/stores/userStore";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface MessageProps {
    isCurrentPet: boolean;
    message: string;
    dateSent: string;
}

export default function Message({isCurrentPet, message, dateSent}: MessageProps) {
    const alignment = isCurrentPet ? "flex-end" : "flex-start";
    const bottomRightRadius = isCurrentPet ? 0 : 32;
    const bottomLeftRadius = isCurrentPet ? 32 : 0;

    return (
        <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
            <Box
                bg={isCurrentPet ? "blue.50" : "gray.100"}
                borderRadius="lg"
                px={6}
                py={4}
                maxW={80}
                borderTopLeftRadius={32}
                borderTopRightRadius={32}
                borderBottomLeftRadius={bottomLeftRadius}
                borderBottomRightRadius={bottomRightRadius}
            >
                <Text fontSize="sm" color="black" textAlign="center">{message}</Text>
                <Text fontSize="xs" color="gray.500" mt={2} textAlign="right">
                    {dateSent}
                </Text>
            </Box>
        </VStack>
    );
}

