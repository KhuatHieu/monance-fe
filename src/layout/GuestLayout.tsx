import {
  ActionIcon,
  AppShell,
  Button,
  Flex,
  Image,
  rem,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const GuestLayout = ({ children }: { children: ReactNode }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // dark: #18191A
  // light: #F0F2F5

  return (
    <AppShell header={{ height: "3rem" }} padding={"md"}>
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
          <Flex ml={"auto"} gap={"1rem"} align={"center"}>
            <ActionIcon onClick={toggleColorScheme} variant="default">
              {colorScheme === "dark" ? (
                <IconSun style={{ width: rem(14), height: rem(14) }} />
              ) : (
                <IconMoon style={{ width: rem(14), height: rem(14) }} />
              )}
            </ActionIcon>
            <Link to={"./sign-in"}>
              <Button>Sign in</Button>
            </Link>
            <Link to={"./sign-up"}>
              <Button variant="outline">Sign up</Button>
            </Link>
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Main bg={colorScheme === "light" ? "#F0F2F5" : "#18191A"}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default GuestLayout;
