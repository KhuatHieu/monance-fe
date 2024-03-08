import { useDocumentTitle } from "@/hooks";
import { Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation();

  useDocumentTitle(t("landing-page.title"));

  return (
    <>
      <Text>{t("landing-page.welcome")}</Text>
    </>
  );
};

export default LandingPage;
