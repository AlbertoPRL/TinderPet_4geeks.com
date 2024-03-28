import { Box, Text, VStack } from "@chakra-ui/react";

type Props = {
    message: string;
    dateSent: string;
    from: "me" | "others";
};

export default function Message({ message, dateSent, from }: Props) {

    const isCurrentUser = from === "me";
    const alignment = isCurrentUser ? "flex-end" : "flex-start";
    const bottomRightRadius = isCurrentUser ? 0 : 32;
    const bottomLeftRadius = isCurrentUser ? 32 : 0;

    return (
        <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
            <Box
                bg={isCurrentUser ? "blue.50" : "gray.100"}
                borderRadius="lg"
                px={6}
                py={4}
                maxW={80}
                borderTopLeftRadius={32}
                borderTopRightRadius={32}
                borderBottomLeftRadius={bottomLeftRadius}
                borderBottomRightRadius={bottomRightRadius}
            >
                <Text fontSize="sm" color="black" textAlign="center">{message}</Text>
                <Text fontSize="xs" color="gray.500" mt={2} textAlign="right">
                    {dateSent}
                </Text>
            </Box>
        </VStack>
    );
}

