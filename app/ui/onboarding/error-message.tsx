import { Text } from "@chakra-ui/react";

export default function ErrorMessage({
  message,
}: {
  message: string | undefined;
}) {
  return (
    <Text p={1} fontSize="xx-small" color="red.400">
      {message}
    </Text>
  );
}
