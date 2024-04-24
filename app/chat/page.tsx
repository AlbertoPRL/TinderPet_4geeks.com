"use client";

import React from "react";
import { HStack, Flex } from "@chakra-ui/react";
import Chat from "../ui/Chat/Chat";
import ChatFiles from "../ui/Chat/ChatFiles";
import ChatSideBar from "../ui/Chat/ChatSideBar";
import { useUserStore } from "../services/ZStores/userStore";
import { usePetStore } from "../services/ZStores/petStore";

export default function ChatView() {
    const user = useUserStore((state) => state.user )
    const pets = usePetStore((state) => state.pets)

    const fetchUser = useUserStore((state) => state.fetchUser);
    

    React.useEffect(() => {
        console.log(pets);
        console.log(user);
    }, []);

    return (
        <HStack h='100vh' spacing={0}>
            <Flex
                as='aside'
                h='full'
                maxW={{ base: 'xs', xl: 'sm' }}
                display={{ base: 'none', lg: 'flex' }}
                w='full'
                borderRightColor='gray.100'
                borderRightWidth={1}
                pt={8}
            >
                <ChatSideBar></ChatSideBar>
            </Flex>
            <Flex
                as='main'
                h='full'
                flex={1}
                borderRightColor='gray.100'
                borderRightWidth={1}
            >
                <Chat />
            </Flex>
            <Flex
                as='aside'
                h='full'
                maxW={{ base: 'xs', xl: 'sm' }}
                display={{ base: 'none', lg: 'flex' }}
                w='full'
            >
                <ChatFiles></ChatFiles>
            </Flex>
        </HStack>
    );
};
