import { VStack, Flex, Avatar, AvatarBadge, Box, Divider, HStack, Heading, Text, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function ChatSideBar() {

    return (

        <VStack h='full' alignItems='center' w='full' spacing={6}>
            <Flex
                w='full'
                flexDirection='column'
                alignItems='center'
                justifyContent='flex-start'
            >
                <Avatar name='Travis Taylor' size='2xl'>
                    <AvatarBadge bg='green.400' boxSize={8} borderWidth={4} />
                </Avatar>
            </Flex>
            <Box px={8} w='full'>
                <Divider color='gray.100' />
            </Box>
            <Tabs position="relative" variant="unstyled">
                <TabList>
                    <Tab>Matches</Tab>
                    <Tab>Messages</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <p>Matches</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Messages</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    )
};