import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import Profile from './Profile'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const ChatProfileDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent pt={8}>
          <DrawerCloseButton />
          <Profile/>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatProfileDrawer;