import { PropsForms } from "@/app/lib/schema";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function ConfirmationForm({ nextStep, prevStep }: PropsForms) {
  const { watch } = useFormContext();

  return (
    <Card h={"full"} w={"100%"}>
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Please review your pet's profile before submitting.
        </Heading>
      </CardHeader>
      <CardBody>
        <Box as="pre" width="100%" p={2} fontSize={"xs"}>
          <code>{JSON.stringify(watch(), null, 2)}</code>
        </Box>
      </CardBody>

      <CardFooter justifyContent={"flex-end"}>
        <Button onClick={prevStep} size="sm" variant="ghost">
          Prev
        </Button>
        <Button type="button" onClick={nextStep} size="sm">
          Finish
        </Button>
      </CardFooter>
    </Card>
  );
}
