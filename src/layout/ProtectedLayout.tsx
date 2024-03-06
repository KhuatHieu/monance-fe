import { useAuth } from "@/hooks";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  Select,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowBarLeft,
  IconArrowBarRight,
  IconLogout,
  IconMoon,
  IconSettings,
  IconSun,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const { signOut } = useAuth();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { pathname } = useLocation();

  const [opened, { toggle }] = useDisclosure(
    localStorage.getItem("is-navbar-open") === "true",
  );

  const handleToggleNavbar = () => {
    localStorage.setItem("is-navbar-open", String(!opened));
    toggle();
  };

  return (
    <AppShell
      header={{ height: "3rem" }}
      navbar={{
        width: opened ? "15rem" : "5rem",
        breakpoint: "sm",
      }}
      padding={"md"}
    >
      <AppShell.Header>
        <Flex
          h={"100%"}
          align={"center"}
          direction={"row"}
          gap={"md"}
          mr={"1rem"}
          ml={"1rem"}
        >
          <Link to={"/"}>
            <Image
              fit="contain"
              w={"auto"}
              height={"35rem"}
              src={"/src/assets/monance-logo.png"}
            />
          </Link>

          <ActionIcon
            onClick={handleToggleNavbar}
            variant="transparent"
            color={colorScheme === "light" ? "black" : "right"}
            size={"xs"}
          >
            {opened ? <IconArrowBarLeft /> : <IconArrowBarRight />}
          </ActionIcon>

          <Select ml={"1rem"} placeholder="Your projects" />

          <Flex ml={"auto"} mr="1rem" gap={"1rem"}>
            <Menu shadow="md" width={"10rem"}>
              <Menu.Target>
                <Button variant="transparent">
                  <Avatar src={""} />
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    <IconUser style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Profile
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <IconSettings style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Settings
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                  onClick={toggleColorScheme}
                  leftSection={
                    colorScheme === "dark" ? (
                      <IconSun style={{ width: rem(14), height: rem(14) }} />
                    ) : (
                      <IconMoon style={{ width: rem(14), height: rem(14) }} />
                    )
                  }
                >
                  Change theme
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                  onClick={signOut}
                  color="red"
                  leftSection={
                    <IconLogout style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Sign out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar>
        <Flex direction={"column"} align={"center"} pt={"1rem"}>
          <Button
            component={Link}
            to={"./users"}
            variant={pathname === "/users" ? "" : "default"}
          >
            <IconUsersGroup />
          </Button>
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main bg={colorScheme === "light" ? "#F0F2F5" : "#18191A"}>
        <Box m={"1rem"}>{children}</Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default ProtectedLayout;
