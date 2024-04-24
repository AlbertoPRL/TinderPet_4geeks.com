import { Avatar, AvatarGroup, HStack, Text } from "@chakra-ui/react";


export default function SideBarMessages() {

    return (
        <HStack>
            <AvatarGroup size='md' max={2}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            </AvatarGroup>
            <Text fontSize='sm' fontWeight="bold" color='gray.500'>Last Message Preview</Text>
            <Text fontSize='xs' color='gray.500'>01/01/1001</Text>
        </HStack>        
    )
};