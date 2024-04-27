import { Flex, HStack, IconButton, Avatar, AvatarBadge, Heading, Text, Box, Button, Divider, List, ListItem, VStack } from "@chakra-ui/react";
import ChatFile from "./ChatFile";
import ChatLink from "./ChatLink";


export default function ChatFiles() {
    return (
        <Flex h="full" flexDirection="column" alignItems="center" w="full" pt={8}>
            <HStack justify="space-between" w="full" px={8} mb={8}>
                <Text color="gray.500">20 March 2021</Text>
                <IconButton
                    rounded="full"
                    // icon={<FaBell />}
                    color="gray.500"
                    variant="ghost"
                    aria-label="Notifications"
                />
            </HStack>
            <Avatar size="2xl" name="Dina Harrison">
                <AvatarBadge boxSize={8} borderWidth={4} bg="green.400" />
            </Avatar>
            <Heading size="md" mt={3}>
                Dina Harrison
            </Heading>
            <Box px={8} w="full">
                <Divider mt={6} color="gray.100" />
            </Box>
            <VStack spacing={6} overflowY="auto" w="full">
                <HStack px={8} w="full" mt={6} justifyContent="space-between">
                    <Heading size="md">Shared files</Heading>
                    <Button fontWeight="normal" variant="text" size="xs" color="blue">
                        see all
                    </Button>
                </HStack>
                <List spacing={4} mt={6} w="full">
                    <ListItem>
                        <ChatFile />
                    </ListItem>
                    <ListItem>
                        <ChatFile />
                    </ListItem>
                    <ListItem>
                        <ChatFile />
                    </ListItem>
                    <ListItem>
                        <ChatFile />
                    </ListItem>
                    <ListItem>
                        <ChatFile />
                    </ListItem>
                    <ListItem>
                        <ChatFile />
                    </ListItem>
                    <ListItem>
                        <ChatFile />
                    </ListItem>
                </List>
                <Box px={8} w="full">
                    <Divider mt={6} color="gray.100" />
                </Box>
                <HStack px={8} w="full" mt={6} justifyContent="space-between">
                    <Heading size="md">Shared links</Heading>
                    <Button fontWeight="normal" variant="text" size="xs" color="blue">
                        see all
                    </Button>
                </HStack>
                <List pb={6} spacing={4} mt={6} w="full">
                    <ListItem>
                        <ChatLink />
                    </ListItem>
                    <ListItem>
                        <ChatLink />
                    </ListItem>
                    <ListItem>
                        <ChatLink />
                    </ListItem>
                </List>
            </VStack>
        </Flex>
    )
}