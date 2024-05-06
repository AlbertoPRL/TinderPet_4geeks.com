import { Input, Button, HStack } from "@chakra-ui/react";
import { ChangeEventHandler, use, useEffect, useState } from "react";
import Connector from "../../lib/services/signalRConnection";
import { useStore } from "zustand";
import { useConversationStore } from "@/app/lib/stores/conversationStore";
import { connect } from "http2";
import { usePetStore } from "@/app/lib/stores/petStore";

export default function MessageInput() {
    const conversationState = useStore(useConversationStore, (state) => state);
    const petState = useStore(usePetStore, (state) => state);
    const [message, setMessage] = useState('');
    const {joinGroups, SendMessageToGroup} = Connector();
    const groupId = conversationState.selectedConversation?.id;
    const receiver = conversationState.selectedConversation?.pet2.id;
    const sender =conversationState.selectedConversation?.pet1.id;
    


    useEffect(() => {
        if (conversationState.conversations) {
            joinGroups(conversationState.conversations)
        }
    }, [conversationState.selectedConversation])

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if(groupId && sender && receiver)
            {
                handleSendMessage(message);
            }
            setMessage('');
        }      
    };

    const handleSendMessage = (message : string) => {
        if(groupId && sender && receiver && petState?.userSelectedPet?.id)
        {
            const date = new Date().toISOString();
            SendMessageToGroup(message, groupId, petState?.userSelectedPet?.id, receiver == petState.userSelectedPet.id ? sender : receiver, date);
        }
        setMessage('');
    }

    return (
        <HStack>
            <Input
                placeholder="Type a message"
                value={message}
                onChange={(e : React.ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)}
                onKeyDown={handleKeyPress}
            />
            <Button onClick={() => handleSendMessage(message)} colorScheme="blue">Send</Button>
        </HStack>
    );
};