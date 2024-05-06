import { VStack, Flex, Avatar, AvatarBadge, Box, Divider, HStack, Heading, Text, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Button } from "@chakra-ui/react";
import SideBarMatches from "./SideBarMatches";
import SideBarMessages from "./SideBarMessages";
import { useConversationStore } from "@/app/lib/stores/conversationStore";
import { useEffect } from "react";
import { usePetStore } from "@/app/lib/stores/petStore";
import { useAuthStore } from "@/app/lib/stores/authStore";
import { useStore } from "zustand";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function ChatSideBar() {
    const conversations = useConversationStore((state) => state.conversations);
    const authState = useStore(useAuthStore, ((state) => state));
    const fetchConversations = useConversationStore((state) => state.fetchConversations);
    const conversationState = useConversationStore((state) => state);
    const petState = useStore(usePetStore, ((state) => state));
    const router = useRouter();

    useEffect(() => {
        if (authState?.token && petState?.userSelectedPet?.id) {
            fetchConversations(authState.token, petState.userSelectedPet.id);
        }
    }, [authState?.token, petState?.userSelectedPet?.id]);

    return (
        <VStack h='full' alignItems='center' w='full' spacing={6}>
            <HStack w='full' justifyContent='start' pt={4}>
                <Button onClick={() => {
                    router.push('/tinderpet/profile');
                }}>
                    <IoArrowBackCircleSharp color="red.500" size='1.8rem' />
                </Button>
            </HStack>
            <Flex
                w='full'
                flexDirection='column'
                alignItems='center'
                justifyContent='flex-start'
            >
                <Avatar name={petState?.userSelectedPet?.name} size='2xl'>
                    <AvatarBadge bg='green.400' boxSize={8} borderWidth={4} />
                </Avatar>
            </Flex>
            <Box px={8} w='full'>
                <Divider color='gray.100' />
            </Box>
            <Tabs variant="unstyled" display="flex" w='full' flexDirection="column" position="relative">
                <TabList justifyContent={"center"}>
                    <Tab>Matches</Tab>
                    <Tab>Messages</Tab>
                </TabList>
                <TabIndicator
                    justifyContent={"center"}
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <SideBarMatches></SideBarMatches>
                    </TabPanel>
                    <TabPanel maxWidth="100%" overflow="hidden">
                        {conversations?.map((conversations, index) => (
                            <Button onClick={() => conversationState.setSelectedConversation(conversations)} key={index}>
                            <SideBarMessages 
                                key={index}
                                lastMessagePreview={conversations.lastMessagePreview}
                                name={conversations.name}
                                creationDate={conversations.creationDate}                                
                            ></SideBarMessages>
                            </Button>
                        ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    )
};
