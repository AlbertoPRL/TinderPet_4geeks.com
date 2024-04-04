import { PropsForms } from "@/app/lib/schema";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function ConfirmationForm({ nextStep, prevStep }: PropsForms) {
  const { watch } = useFormContext();

  return (
    <Flex h={"100%"} flexDir={"column"} justifyContent={"space-between"}>
      <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
        Please review your pet's profile before submitting.
      </Heading>

      <Box as="pre" rounded="md" width="100%" p={2} fontSize={"xs"}>
        <code>{JSON.stringify(watch(), null, 2)}</code>
      </Box>

      <Flex width="100%" justify="flex-end" gap={4}>
        <Button onClick={prevStep} size="sm" variant="ghost">
          Prev
        </Button>
        <Button type="button" onClick={nextStep} size="sm">
          Finish
        </Button>
      </Flex>
    </Flex>
  );
}
