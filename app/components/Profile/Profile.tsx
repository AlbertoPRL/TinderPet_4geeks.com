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
                <Flex justifyContent='center' alignItems='center'>
                    <Avatar name={petState?.userSelectedPet?.name || 'No pet selected'} src='https://bit.ly/dan-abramov' />
                    <Text isTruncated>{petState?.userSelectedPet?.name || 'No pet'}</Text>
                </Flex>
                <Flex>
                    <Tabs variant='unstyled' index={tabIndex} onChange={handleTabsChange}>
                        <TabList>
                            <Tab><CiSettings /></Tab>
                            <Tab><CiSettings /></Tab>
                            <Tab><CiSettings /></Tab>
                        </TabList>
                    </Tabs>
                </Flex>
            </HStack>

            <Tabs variant='unstyled' index={tabIndex} onChange={handleTabsChange}>
                <ProfileTabs />
            </Tabs>
        </VStack>
    );
}