
{ /* A message input with a send button component*/ }
{ /* The input should have a placeholder that says "Type a message" */ }
{ /* The send button should have the text "Send" */ }
{ /* There should be another button that allows the user to attach a picture, video, or file */ }
{ /* The button should have an icon that represents attaching a file */ }
{ /* All that using react-chakra-ui */ }
import { Input, Button, IconButton, HStack } from "@chakra-ui/react";

export default function MessageInput() {
    return (
        <HStack>
            <Input placeholder="Type a message" />
            <Button colorScheme="blue">Send</Button>
        </HStack>
    );
};