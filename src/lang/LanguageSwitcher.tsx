import i18n from "@/lang/i18n";
import { ActionIcon, Menu } from "@mantine/core";
import { IconCheck, IconLanguage } from "@tabler/icons-react";
import { languages } from ".";

const LanguageSwitcher = () => {
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {});
  };

  return (
    <Menu shadow="md">
      <Menu.Target>
        <ActionIcon variant="default">
          <IconLanguage />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {Object.keys(languages).map((lng) => (
          <Menu.Item
            rightSection={
              i18n.language === lng ? <IconCheck size={"1rem"} /> : <></>
            }
            onClick={() => handleChangeLanguage(lng)}
          >
            {languages[lng].nativeName}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageSwitcher;
