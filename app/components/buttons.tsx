import { Button } from "@chakra-ui/react";
import { useStore } from "../lib/hooks/zustandHook";
import { useAuthStore } from "../lib/stores/authStore";
import { useRouter } from "next/navigation";

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

export function LogoutButton() {
  const router = useRouter();
  const store = useStore(useAuthStore, (state) => state);
  const handleLogout = async () => {
    await store?.logout();
    router.push("/sign-in");
  };

  return (
    <Button
      bg="red.500"
      _hover={{ background: "red.700", boxShadow: "none" }}
      color="white"
      size="sm"
      onClick={async () => await handleLogout()}
    >
      Logout
    </Button>
  );
}
