import { create } from 'zustand';
import { useUserStore } from './userStore';
import { ConversationDto } from '@/app/types/Dtos/conversationsDto';

async function fetchFromAPI(userId: string) {
    const response = await fetch(`https://api.example.com/api/Conversation/${encodeURIComponent(userId)}`);
    const data = await response.json();
    return data;
}

type ConversationState = {
    conversations : ConversationDto | null;
    fetchData: () => void;
};

export const useStore = create<ConversationState>((set) => ({
    conversations: null,
    fetchData: async () => {
        const user = useUserStore.getState().user;
        if(user){
        const conversations = await fetchFromAPI(user.id);
        console.log(conversations);
        //set({ conversations });
        }
        else(console.log("No user found"));
    },
}));