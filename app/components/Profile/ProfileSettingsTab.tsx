import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";
import { usePetStore } from "@/app/lib/stores/petStore";
import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoIosChatboxes } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";


export default function ProfileSettingsTab() {
    const petState = useStore(usePetStore, (state) => state);
    const authState = useStore(useAuthStore, (state) => state)
    const router = useRouter();

    const logOut = async () => {
        await authState?.logout();
        router.push('/sign-in');
    }

    const switchPet = () => {
        router.push('/tinderpet/pet-selector');
    }

    return (
        <VStack spacing={6} w="100%" gap='5rem' alignItems="start" >
            <HStack w="100%" justifyContent='end'>
                <Button borderRadius='100' onClick={logOut}>
                    <PiUserSwitchFill size='1.5rem' color="red" />
                </Button>
            </HStack>

            <VStack spacing={2} gap='2rem' alignItems='start' w='100%'>
                <Button onClick={() => { router.push('/tinderpet/chat') }}>
                    <Text>Go to TinChat! <IoIosChatboxes /></Text>
                </Button>

                <Button onClick={switchPet}>
                    <Text>Log in with a different Pet</Text>
                </Button>
                {/* <Button>
                    <Text>Change {petState?.userSelectedPet?.name}'s Information</Text>
                </Button> */}
            </VStack>

        </VStack>
    )
}