import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { IoLogOutSharp } from "react-icons/io5";

import { useStore } from "@/app/lib/hooks/zustandHook";
import { useAuthStore } from "@/app/lib/stores/authStore";

export default function ProfileMenu() {
  const router = useRouter();
  const store = useStore(useAuthStore, (state) => state);
  const handleLogout = async () => {
    await store?.logout();
    router.push("/sign-in");
  };

  return (
    <Menu direction="ltr" isLazy placement="bottom-end">
      <MenuButton as={Button}>
        <CiSettings size="1.5rem" />
      </MenuButton>
      <MenuList>
        <MenuItem
          icon={<IoLogOutSharp />}
          onClick={async () => await handleLogout()}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
