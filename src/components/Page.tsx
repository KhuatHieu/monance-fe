import { Box, Paper, Title } from "@mantine/core";
import { ReactNode } from "react";

const Page = ({
  children,
  header,
  w,
}: {
  children: ReactNode;
  header?: string;
  w?: string;
}) => {
  return (
    <Box w={w}>
      <Title order={2} fw={700}>
        {header}
      </Title>
      <Paper mt={"1rem"} shadow="md" p="md">
        {children}
      </Paper>
    </Box>
  );
};

export default Page;
