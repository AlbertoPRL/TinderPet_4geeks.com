import { Link } from "@chakra-ui/next-js";
import { Button, Card, CardBody, Center, HStack, Text } from "@chakra-ui/react";

export default function BottomCardForm({
  text,
  href,
  textLink,
}: {
  text: string;
  href: string;
  textLink: string;
}) {
  return (
    <Card shadow={"none"} p={0}>
      <CardBody>
        <Center>
          <HStack fontSize="sm" spacing="1">
            <Text pe={1}>{text}</Text>
            <Link color="#0969da" fontSize={"sm"} href={href}>
              {textLink}
            </Link>
          </HStack>
        </Center>
      </CardBody>
    </Card>
  );
}
