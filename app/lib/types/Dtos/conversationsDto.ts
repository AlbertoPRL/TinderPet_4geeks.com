export interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
}

export interface PetDto {
    id: string;
    name: string;
    user: UserDto;
}

export interface MessageDto {
    receiverUserId: string;
//    user: PetDto;
    text?: string;
    creationDate: string | null;
    messageState: string; // replace with actual type if you have an enum for MessageState
}

export interface ConversationDto {
    pet1: PetDto;
    pet2: PetDto;
    name: string;
    id: string;
    lastMessageDate: string;
    lastMessagePreview: string | null;
    unreadMessagesCount: number;
    messages: MessageDto[];
    creationDate: string;
}