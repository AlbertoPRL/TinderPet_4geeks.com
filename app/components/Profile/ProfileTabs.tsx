'use client'

import { TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import PreferencesTab from "./PreferencesTab";
import ProfileSettingsTab from "./ProfileSettingsTab";

export default function ProfileTabs() {
  
  return (
    <TabPanels display='flex' w='100%'>
      <TabPanel w='100%'>
        <ProfileSettingsTab></ProfileSettingsTab>
      </TabPanel>
      <TabPanel w='100%'>
        <PreferencesTab></PreferencesTab>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  );
}

