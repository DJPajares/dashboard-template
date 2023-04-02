import Header from '@/components/global/Header';
import { Box, Typography, useTheme } from '@mui/material';
import Head from 'next/head';

const Inventories = () => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <>
      <Head>
        <title>Inventories</title>
      </Head>

      <Box p={2}>
        <Box py={2}>
          <Header title="Inventories" subtitle="Manage inventories" />
        </Box>

        <Box py={4}></Box>
      </Box>
    </>
  );
};

export default Inventories;
