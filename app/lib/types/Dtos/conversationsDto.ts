export interface UserDto {
    id: string;
}

export interface PetDto {
    id: string;
    user: UserDto;
}

export interface MessageDto {
    user: UserDto;
    text: string | null;
    creationDate: Date;
    messageState: string; // replace with actual type if you have an enum for MessageState
}

export interface ConversationDto {
    pet1: PetDto;
    pet2: PetDto;
    name: string;
    lastMessageDate: Date;
    lastMessagePreview: string | null;
    unreadMessagesCount: number;
    messages: MessageDto[] | null;
    creationDate: Date;
}