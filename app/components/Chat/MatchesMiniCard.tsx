import { Card, Image, HStack, Text, VStack } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

interface Props {
    pet1Name: string;
    pet2Name: string;
}

export default function MatchesMiniCard({ pet1Name, pet2Name }: Props) {

    return (
        <VStack backgroundColor='red.100'>
            <HStack gap={0}>
                <Card maxW='md' >
                    <Image
                        objectFit='cover'
                        src='/images/testDog.jpg'
                        alt='Chakra UI'
                    />
                </Card>

                <Card maxW='md'>
                    <Image
                        objectFit='cover'
                        src='/images/testDog.jpg'
                        alt='Chakra UI'
                    />
                </Card>
            </HStack>
            <HStack justifyContent="space-between" w='100%'>            
                <Text> {pet1Name} </Text>
                <FaHeart color="red.600" size="2rem"/> 
                <Text> {pet2Name} </Text>
            </HStack>
        </VStack>
    )
}