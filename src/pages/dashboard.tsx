import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import Header from '@/components/global/Header';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Head from 'next/head';
import Card from '@/components/charts/Card';

const Dashboard = () => {
  const theme = useTheme();
  const colors = theme.palette;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Box p={2}>
        {/* HEADER */}
        <Box py={2}>
          <Header title="Dashboard" subtitle="Welcome to the dashboard" />
        </Box>

        {/* CHARTS */}
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 4">
            <Card
              title="Costs"
              value="$350"
              backgroundColor={colors.background.paper}
              isMobile={isMobile}
            />
          </Box>

          <Box gridColumn="span 4">
            <Card
              title="Revenue"
              value="$2,000"
              backgroundColor={colors.background.paper}
              isMobile={isMobile}
            />
          </Box>

          <Box gridColumn="span 4">
            <Card
              title="Revenue (%)"
              value="28%"
              backgroundColor={colors.background.paper}
              isMobile={isMobile}
            />
          </Box>

          <Box gridColumn="span 12">
            <BarChart title="Sales Quantity" isMobile={isMobile} />
          </Box>

          <Box gridColumn="span 6">
            <PieChart title="Used Tech" isMobile={isMobile} />
          </Box>

          <Box gridColumn="span 6">
            <LineChart title="Transportation" isMobile={isMobile} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
