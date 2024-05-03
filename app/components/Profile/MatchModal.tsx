'use client';

import { useMatchStore } from "@/app/lib/stores/matchStore";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type MatchModalProps = {
    isOpen: boolean;
  };

  export default function MatchModal({ isOpen }: MatchModalProps) {
      const matchedPet = useMatchStore((state) => state.matchedPet);
      const hideMatchModal = useMatchStore((state) => state.hideMatchModal);
      const router = useRouter();
  
      return (
        <>  
          <Modal isOpen={isOpen} onClose={hideMatchModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  Congratulations. Your pet has matched with {matchedPet?.name}
                  Go ahead and start a conversation with the owner of {matchedPet?.name}
              </ModalBody>  
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={() => router.push('/tinderpet/chat')}>
                  Start Chatting
                </Button>
                <Button onClick={hideMatchModal} variant='ghost'>I'll do later</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
  }