'use client'

import { TabPanels, TabPanel, Flex } from "@chakra-ui/react";
import PreferencesTab from "./PreferencesTab";

const ProfileTabs: React.FC = () => {
  return (
    <TabPanels display='flex' w='100%'>
      <TabPanel w='100%'>
        <PreferencesTab></PreferencesTab>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  );
}

export default ProfileTabs;