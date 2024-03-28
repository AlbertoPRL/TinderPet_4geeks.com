import React, { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import { Flex, Stat, StatLabel, StatNumber, VStack } from '@chakra-ui/react';

const messages = [
    {
        message: "Hey Travis! Would you like to go out for a coffee?",
        from: "others",
        dateSent: "20:21"
    },
    {
        message: "Sure! At 11:00 am?",
        from: "me",
        dateSent: "20:22"
    },
    {
        message: "That's too early! How about at noon?",
        from: "others",
        dateSent: "20:22"
    },
    {
        message: "That sounds good as well. Where should we meet?",
        from: "me",
        dateSent: "20:23"
    },
    {
        message: "Meet me at the hardware store on 21 Duck Street.",
        from: "others",
        dateSent: "20:23"
    },
    {
        message: "Sounds good. I'll bring my friend with me as well!",
        from: "me",
        dateSent: "20:24"
    },
    {
        message: "Which one? The developer or the designer?",
        from: "others",
        dateSent: "20:24"
    },
    {
        message: "The developer. You remember Tony, right?",
        from: "me",
        dateSent: "20:24"
    },
    {
        message: "Yeah! Tony's a great guy!",
        from: "others",
        dateSent: "20:25"
    },
    {
        message: "Indeed he is! Alright, see you later 👋!",
        from: "me",
        dateSent: "20:25"
    }
];
export default function Chat() {



    return (
        <Flex w='full' flexDirection='column'>
            <Flex w='full' overflowY="scroll" flexDirection="column" flex={1} alignSelf={"flex-start"}>
                <Stat mt={1}>
                    <StatLabel color="gray.500">Chatting with</StatLabel>
                    <StatNumber>user2.Name</StatNumber>
                    <StatLabel color="gray.500">Owner of</StatLabel>
                    <StatNumber>user2.Pet.Name</StatNumber>
                </Stat>
                {messages.map(({ message, from, dateSent }, index) => (
                    <Message
                        key={index}
                        message={message}
                        from={from as "me" | "others"} // Cast 'from' as "me" | "others"
                        dateSent={dateSent}
                    />
                ))}
            </Flex>
            <MessageInput></MessageInput>
        </Flex>
    );
}