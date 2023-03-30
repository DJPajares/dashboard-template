import Header from '@/components/global/Header';
import { Box, Typography, useTheme } from '@mui/material';
import Head from 'next/head';

const Users = () => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <Box p={2}>
        <Box py={2}>
          <Header title="Users" subtitle="Manage users" />
        </Box>

        <Box py={4}>
          {/* <TextField label="Search" variant="outlined" size="small" />
          <Button variant="contained" color="primary">
            Search
          </Button> */}
        </Box>
      </Box>
    </>
  );
};

export default Users;
