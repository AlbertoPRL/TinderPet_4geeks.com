import { Text } from "@chakra-ui/react";

export default function ErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return (
    <Text mt={2} fontSize="x-small" color="red.500">
      {message}
    </Text>
  );
}
