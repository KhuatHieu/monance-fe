import { Page } from "@/components";
import { useAuth } from "@/hooks";
import { SignUpRequest } from "@/types";
import { Button, Center, Divider, Flex, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDocumentTitle } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { t } = useTranslation();

  const { isLoading, signUp } = useAuth();

  useDocumentTitle(t("title.signUp"));

  const form = useForm<SignUpRequest>();

  const handleSignUp = (signUpRequest: SignUpRequest) => {
    signUp(signUpRequest)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((error) => {
        const errors: { [string: string]: string } = {};
        Object.entries(error.response.data.errors).forEach(([key, value]) => {
          errors[key] = t(value as string, { field: key });
        });
        form.setErrors(errors);
      });
  };

  return (
    <Center>
      <Page w={"30rem"}>
        <form onSubmit={form.onSubmit((values) => handleSignUp(values))}>
          <Flex w={"100%"} gap={"md"}>
            <TextInput
              w={"100%"}
              label={t("authentication.firstName")}
              placeholder="Your First name"
              {...form.getInputProps("firstName")}
            />
            <TextInput
              w={"100%"}
              label={t("authentication.lastName")}
              placeholder="Your Last name"
              {...form.getInputProps("lastName")}
            />
          </Flex>
          <TextInput
            mt={"md"}
            label={t("authentication.username")}
            placeholder="Your username"
            {...form.getInputProps("username")}
          />
          <TextInput
            withAsterisk
            mt={"md"}
            label={t("authentication.email")}
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            mt={"md"}
            label={t("authentication.password")}
            type="password"
            placeholder="Your password"
            {...form.getInputProps("password")}
          />

          <Button
            type="submit"
            mt={"xl"}
            w={"100%"}
            variant="outline"
            loading={isLoading}
          >
            {t("authentication.signUp")}
          </Button>

          <Divider mt={"xl"} />

          <Link to={"/sign-in"}>
            <Button mt={"xl"} w={"100%"}>
              {t("authentication.backToSignIn")}
            </Button>
          </Link>
        </form>
      </Page>
    </Center>
  );
};

export default SignUp;
