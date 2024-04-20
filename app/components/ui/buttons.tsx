import { Button } from "@chakra-ui/react";

export function ButtonSubmitForm({
  disabled,
  text,
}: {
  disabled: boolean;
  text: string;
}) {
  return (
    <Button
      disabled={disabled}
      type="submit"
      bg="red.500"
      _hover={{ background: "red.700", boxShadow: "none" }}
      color="white"
      size="sm"
    >
      {text}
    </Button>
  );
}
