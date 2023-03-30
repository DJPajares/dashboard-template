import BarChart from '@/components/charts/BarChart';
import PieChart from '@/components/charts/PieChart';
import Header from '@/components/global/Header';
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

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              my: 2,
              borderRadius: 1,
              backgroundColor: colors.background.paper
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: '30px 30px 0 30px' }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart />
            </Box>
          </Box>

          <Box
            sx={{
              my: 2,
              borderRadius: 1,
              backgroundColor: colors.background.paper
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: '30px 30px 0 30px' }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <PieChart />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
