import { Card, Flex, Image } from "@chakra-ui/react";

const userImgUrl = 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

export default function SideBarMatches() {

    return (
        <Flex gap={5} wrap={"wrap"} justify={"center"}>
            <Card maxW='md' w={"40%"} borderWidth="0.3rem" borderColor="gray.500" >
                <Image
                    objectFit='cover'
                    src={userImgUrl}
                    alt='Chakra UI'
                />
            </Card>
        </Flex >
    )
}