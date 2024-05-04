import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";

export default function CompletedForm() {
  return (
    <Flex height="100vh" alignItems={"center"} justifyContent={"center"}>
      <Card h={"250px"} w={"sm"} shadow={"none"}>
        <CardBody
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="full"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Form submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Your form has been submitted successfully. You will be redirected
              to the main page in 5 seconds. Thank you for using TinderPet.
            </AlertDescription>
          </Alert>
        </CardBody>
      </Card>
    </Flex>
  );
}
