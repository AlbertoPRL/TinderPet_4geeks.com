import { FormDataType, PropsForms } from "@/app/lib/types/schema";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function ConfirmationForm({ nextStep, prevStep }: PropsForms) {
  const { watch } = useFormContext<FormDataType>();

  const allData = watch();

  return (
    <Card h={"full"} w={"100%"} shadow={"none"}>
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Confirmation
        </Heading>
        <Text mt={1} fontSize="sm" color="gray.600">
          Please review your pet's profile before submitting.
        </Text>
      </CardHeader>
      <CardBody>
        <Code
          display={"flex"}
          children={<pre>{JSON.stringify(allData, null, 2)}</pre>}
        />
      </CardBody>

      <CardFooter justifyContent={"flex-end"} pt={0}>
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
