'use client'

import { Avatar, Flex, HStack, Tab, TabList, Tabs, Text, VStack } from "@chakra-ui/react";
import { useStore } from "zustand";
import { useState } from "react";
import { usePetStore } from "@/app/lib/stores/petStore";
import ProfileTabs from "./ProfileTabs";
import { CiSettings } from "react-icons/ci";

export default function Profile() {
    const petState = useStore(usePetStore, (state) => state);
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabsChange = (index: number) => {
        setTabIndex(index);
    };

    return (
        <VStack flexGrow={1}>
            <HStack justifyContent="space-between" w='100%'>
                <Flex justifyContent='center' alignItems='center' gap={1} px='0.5rem'>
                    <Avatar name={petState?.userSelectedPet?.name || 'No pet selected'} src='https://bit.ly/dan-abramov' />
                    <Text isTruncated>{petState?.userSelectedPet?.name || 'No pet'}</Text>
                </Flex>
                <Flex>
                    <Tabs variant='unstyled' index={tabIndex} onChange={handleTabsChange}>
                        <TabList>
                            {/* <Tab px={1}><CiSettings /></Tab>
                            <Tab px={1}><CiSettings /></Tab> */}
                            <Tab><CiSettings size='1.5rem'/></Tab>
                        </TabList>
                    </Tabs>
                </Flex>
            </HStack>

            <Tabs variant='unstyled' display='flex' w='100%' index={tabIndex} onChange={handleTabsChange}>
                <ProfileTabs/>
            </Tabs>
        </VStack>
    );
}