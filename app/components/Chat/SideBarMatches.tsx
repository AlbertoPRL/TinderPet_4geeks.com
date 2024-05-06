import { useStore } from "@/app/lib/hooks/zustandHook";
import { useConversationStore } from "@/app/lib/stores/conversationStore";
import { Card, Flex, Image } from "@chakra-ui/react";
import MatchesMiniCard from "./MatchesMiniCard";
import { ConversationDto } from "@/app/lib/types/Dtos/conversationsDto";

export default function SideBarMatches() {
    const conversationState = useStore(useConversationStore, (state) => state);

    return (
        <Flex gap={5} wrap="wrap" justify="start" >
            {conversationState?.conversations?.map((conversation : ConversationDto, index) => (
                <MatchesMiniCard 
                    key={index}
                    pet1Name={conversation.pet1.name}
                    pet2Name={conversation.pet2.name}
                />
            ))}
        </Flex >
    )
}