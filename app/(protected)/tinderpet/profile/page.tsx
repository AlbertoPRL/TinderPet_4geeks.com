import Matches from "@/app/components/profile/Matches";
import Profile from "@/app/components/profile/Profile";
import { Flex, HStack } from "@chakra-ui/react";

export default function ProfileView() {
  return (
    <HStack h="100vh" spacing={0}>
      <Flex
        as="aside"
        h="full"
        maxW={{ base: "xs", xl: "sm" }}
        display={{ base: "none", lg: "flex" }}
        w="full"
        borderRightColor="gray.100"
        borderRightWidth={1}
        pt={8}
      >
        <Profile />
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
        align="center"
        justify="center"
      >
        <Matches />
      </Flex>
    </HStack>
  );
}
