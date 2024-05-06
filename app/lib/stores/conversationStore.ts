import { create, useStore } from "zustand";
import { ConversationDto, MessageDto } from "@/app/lib/types/Dtos/conversationsDto";
import { createJSONStorage, persist } from "zustand/middleware";
import { use } from "react";


type ConversationState = {
  conversations: ConversationDto[] | null;
  selectedConversation: ConversationDto | null;

  fetchConversations: (token: string, selectedPetId: string) => void;
  setSelectedConversation: (conversation: ConversationDto) => void;
  addMessageToConversation: (conversationId: string, message: any) => void;
};


export const useConversationStore = create<ConversationState>()(
  persist(
    (set) => ({
      conversations: [],
      selectedConversation: null,
      fetchConversations: async (token: string, selectedPetId: string) => {
        const response = await fetch(`http://129.213.181.186/api/Conversation/GetConversationByPetId?petId=${selectedPetId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const conversations = await response.json();
          set({ conversations });
          console.log(conversations);
        } else {
          console.error(`HTTP error! status: ${response.status}`);
        }
      },

      setSelectedConversation: (conversation: ConversationDto) => set({ selectedConversation: conversation }),

      addMessageToConversation: (conversationId: string, message: MessageDto) => {
        const conversations = useConversationStore.getState().conversations;
        if (conversations) {
          const conversation = conversations.find(c => c.id === conversationId);
          if (conversation) {
            conversation.messages = [...conversation.messages, message];
            set({ conversations: [...conversations] });
          }
        }
      },
    }
    ),
    {
      name: 'conversationStore',
      storage: createJSONStorage(() => (localStorage)),
    }
  )
);
