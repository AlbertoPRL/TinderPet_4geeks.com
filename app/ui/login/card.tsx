import { Button, Card, CardBody, Center, HStack, Text } from "@chakra-ui/react";

export default function CardLoginForm({
  text,
  textLink,
  onClick,
}: {
  text: string;
  textLink: string;
  onClick: () => void;
}) {
  return (
    <Card variant="outline" borderColor="#d0d7de" p={0}>
      <CardBody>
        <Center>
          <HStack fontSize="sm" spacing="1">
            <Text pe={1}>{text}</Text>
            <Button
              color="#0969da"
              fontSize={"sm"}
              bg={"transparent"}
              p={0}
              _hover={{ background: "none", boxShadow: "none" }}
              onClick={onClick}
            >
              {textLink}
            </Button>
          </HStack>
        </Center>
      </CardBody>
    </Card>
  );
}
