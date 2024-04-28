import { Input, Button, HStack } from "@chakra-ui/react";
import { MessageInputProps } from "@/app/lib/types/types";

export default function MessageInput({ message, onInputChange, onSendMessage }: MessageInputProps) {

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            onSendMessage(event as any);
        }
    };
    return (
        <HStack>
            <Input
                placeholder="Type a message"
                value={message}
                onChange={onInputChange}
                onKeyDown={handleKeyPress}
            />
            <Button onClick={onSendMessage} colorScheme="blue">Send</Button>
        </HStack>
    );
};