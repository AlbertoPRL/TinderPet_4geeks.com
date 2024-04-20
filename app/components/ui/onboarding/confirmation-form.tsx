import { FormDataType, PropsForms } from "@/app/lib/types/schema";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Code,
  Divider,
  HStack,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function ConfirmationForm({ nextStep, prevStep }: PropsForms) {
  const { watch } = useFormContext<FormDataType>();

  const allData = watch();

  return (
    <Card
      h={"full"}
      w={"100%"}
      bg="#f6f8fa"
      variant="outline"
      borderColor="#d8dee4"
    >
      <CardHeader>
        <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
          Please review your pet's profile before submitting.
        </Heading>
      </CardHeader>
      <CardBody display={"flex"}>
        <Box>
          <HStack>
            <Heading as={"h2"} fontWeight="medium" fontSize="md" lineHeight="6">
              Pet Name:
            </Heading>
            <Text>{allData?.petName || "Pet name is not specified"}</Text>
          </HStack>

          <HStack>
            <Heading as={"h2"} fontWeight="medium" fontSize="md" lineHeight="6">
              Pet Type:
            </Heading>
            <Text>{allData?.petType || "Pet type is not specified"}</Text>
          </HStack>

          <HStack>
            <Heading as={"h2"} fontWeight="medium" fontSize="md" lineHeight="6">
              Pet Breed:
            </Heading>
            <Text>{allData?.petBreed || "Pet breed is not specified"}</Text>
          </HStack>

          <HStack>
            <Heading as={"h2"} fontWeight="medium" fontSize="md" lineHeight="6">
              Pet Age:
            </Heading>
            <Text>
              {allData.petAge?.toLocaleDateString() ||
                "Pet age is not specified"}
            </Text>
          </HStack>

          <HStack>
            <Heading as={"h2"} fontWeight="medium" fontSize="md" lineHeight="6">
              Pet Gender:
            </Heading>
            <Text>{allData?.petGender || "Pet gender is not specified"}</Text>
          </HStack>

          <HStack>
            <Heading as={"h2"} fontWeight="medium" fontSize="md" lineHeight="6">
              Pet Traits:
            </Heading>
            {allData?.petTraits?.map((trait) => (
              <Tag key={trait} colorScheme="pink" size="sm">
                {trait}
              </Tag>
            ))}
          </HStack>

          <HStack>
            <Heading as={"h2"} fontWeight="medium" fontSize="md" lineHeight="6">
              Pet Interests:
            </Heading>
            {allData?.petInterests?.map((interest) => (
              <Tag key={interest} colorScheme="pink" size="sm">
                {interest}
              </Tag>
            ))}
          </HStack>
        </Box>
        <Box>
          <Divider
            orientation="vertical"
            borderColor="pink.500"
            borderWidth={1}
          />
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
