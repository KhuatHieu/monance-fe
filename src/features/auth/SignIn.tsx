import { Page } from "@/components";
import { useAuth, useDocumentTitle } from "@/hooks";
import { SignInRequest } from "@/types";
import { Box, Button, Center, Divider, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const SignIn = () => {
  const { t } = useTranslation();

  const { signIn, isLoading } = useAuth();

  useDocumentTitle(t("title.signIn"));

  const form = useForm<SignInRequest>({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const handleSignIn = (signInRequest: SignInRequest) => {
    signIn(signInRequest)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((error) => {
        const errors: { [string: string]: string } = {};
        Object.entries(error.response.data.errors).forEach(([key, value]) => {
          errors[key] = t(value as string);
        });
        form.setErrors(errors);
      });
  };

  return (
    <Center>
      <Page w={"25rem"}>
        <form onSubmit={form.onSubmit((values) => handleSignIn(values))}>
          <TextInput
            label={t("authentication.emailOrUsername")}
            placeholder="your@email.com"
            {...form.getInputProps("emailOrUsername")}
          />
          <TextInput
            mt={"md"}
            label={t("authentication.password")}
            type="password"
            placeholder="Your password"
            {...form.getInputProps("password")}
          />

          <Button
            type="submit"
            mt={"md"}
            w={"100%"}
            variant="outline"
            loading={isLoading}
          >
            {t("authentication.signIn")}
          </Button>

          <Box mt={"xs"}>
            <NavLink to={"/sign-up"}>
              {t("authentication.forgotPassword")}
            </NavLink>
          </Box>

          <Divider mt={"xl"} />

          <Link to={"/sign-up"}>
            <Button mt={"xl"} w={"100%"}>
              {t("authentication.signUp")}
            </Button>
          </Link>
        </form>
      </Page>
    </Center>
  );
};

export default SignIn;
