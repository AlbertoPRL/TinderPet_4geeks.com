import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import ChatSidebar from './ChatSideBar'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const ChatSideBarDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent pt={8}>
          <DrawerCloseButton />
          <ChatSidebar />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatSideBarDrawer;