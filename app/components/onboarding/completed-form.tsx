import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function CompletedForm() {
  return (
    <Card h={"full"} w={"100%"} shadow={"none"}>
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Form submitted successfully
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>Your form has been submitted successfully</Text>
        <Text>You will be redirected to the main page in 5 seconds</Text>
        <Text>Thank you for using TinPet</Text>
      </CardBody>
    </Card>
  );
}
