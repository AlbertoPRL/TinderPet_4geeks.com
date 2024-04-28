'use client'

import { TabPanels, TabPanel } from "@chakra-ui/react";

const ProfileTabs: React.FC = () => {
  return (
    <TabPanels>
      <TabPanel>
        <p>one!</p>
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