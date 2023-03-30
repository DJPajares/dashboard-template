import Header from '@/components/Header';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import Head from 'next/head';

const Dashboard = () => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Box p={2}>
        <Box py={2}>
          <Header title="Dashboard" subtitle="Welcome to the dashboard" />
        </Box>

        <Box py={4} sx={{ display: 'flex' }}>
          <TextField label="Search" variant="outlined" size="small" />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
