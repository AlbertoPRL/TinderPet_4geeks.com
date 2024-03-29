import { Flex, HStack } from "@chakra-ui/react";
import Chat from "./ui /Chat/Chat";
import ChatSideBar from "./ui /Chat/ChatSideBar";
import ChatFiles from "./ui /Chat/ChatFiles";

export default function Home() {
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

