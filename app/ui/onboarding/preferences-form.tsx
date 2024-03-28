"use client";
import { PropsForms } from "@/app/lib/types";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";

export default function PreferencesForm({
  activeStep,
  nextStep,
  prevStep,
  isLastStep,
  hasCompletedAllSteps,
}: PropsForms) {
  return (
    <Flex h={"100%"} flexDir={"column"} justifyContent={"space-between"}>
      <Stack py={5} spacing={6}>
        <SimpleGrid columns={6} spacing={6}>
          <FormControl as={GridItem} colSpan={[6]}>
            <FormLabel fontSize="sm" fontWeight="md" color="gray.700" m={0}>
              Preferred Play Styles:
            </FormLabel>
            <Checkbox
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              value="playFetch"
            >
              Likes to play fetch
            </Checkbox>
            <Checkbox value="walks">Enjoys walks</Checkbox>
            <Checkbox value="cuddles">Likes cuddles</Checkbox>
            <Checkbox value="other">Has other preferences</Checkbox>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6]}>
            <FormLabel m={0} fontSize="sm" fontWeight="md" color="gray.700">
              Photo
            </FormLabel>
            <Flex alignItems="center" mt={1}>
              <Avatar
                boxSize={12}
                bg="gray.100"
                icon={
                  <Icon
                    as={FaUser}
                    boxSize={9}
                    mt={3}
                    rounded="full"
                    color="gray.300"
                  />
                }
              />
              <Button type="button" ml={5} size="sm" fontWeight="medium">
                Change
              </Button>
            </Flex>
          </FormControl>

          <FormControl as={GridItem} colSpan={[6]}>
            <FormLabel fontSize="sm" fontWeight="md" color="gray.700">
              Cover photo
            </FormLabel>
            <Flex
              mt={1}
              justify="center"
              px={4}
              py={4}
              borderWidth={2}
              borderStyle="dashed"
              rounded="md"
            >
              <Stack spacing={1} textAlign="center">
                <Icon
                  mx="auto"
                  boxSize={10}
                  color="gray.400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
                <Flex fontSize="sm" color="gray.600" alignItems="baseline">
                  <chakra.label
                    htmlFor="file-upload"
                    cursor="pointer"
                    rounded="md"
                    fontSize="sm"
                    color="brand.600"
                    pos="relative"
                    _hover={{
                      color: "brand.400",
                    }}
                  >
                    <span>Upload a file</span>
                    <VisuallyHidden>
                      <input id="file-upload" name="file-upload" type="file" />
                    </VisuallyHidden>
                  </chakra.label>
                  <Text pl={1}>or drag and drop</Text>
                </Flex>
                <Text fontSize="xs" color="gray.500">
                  PNG, JPG, GIF up to 10MB
                </Text>
              </Stack>
            </Flex>
          </FormControl>
        </SimpleGrid>
      </Stack>

      <Flex width="100%" justify="flex-end" gap={4}>
        {!hasCompletedAllSteps ? (
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
}
