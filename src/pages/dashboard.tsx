import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import Header from '@/components/global/Header';
import { Box, Typography, useTheme } from '@mui/material';
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
        {/* HEADER */}
        <Box py={2}>
          <Header title="Dashboard" subtitle="Welcome to the dashboard" />
        </Box>

        {/* CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(10, 1fr)"
          // gridTemplateRows="repeat(2, 1fr)"
          // gridAutoRows="140px"
          gap={2}
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 4"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper,
              px: 2,
              py: 4
            }}
          >
            <Typography
              variant="subtitle1"
              display="flex"
              justifyContent="center"
            >
              Costs
            </Typography>

            <Typography
              variant="h2"
              fontWeight="600"
              display="flex"
              justifyContent="center"
            >
              $350
            </Typography>
          </Box>

          <Box
            gridColumn="span 4"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper,
              px: 2,
              py: 4
            }}
          >
            <Typography
              variant="subtitle1"
              display="flex"
              justifyContent="center"
            >
              Revenue ($)
            </Typography>

            <Typography
              variant="h2"
              fontWeight="600"
              display="flex"
              justifyContent="center"
            >
              $2,000
            </Typography>
          </Box>

          <Box
            gridColumn="span 2"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper,
              px: 2,
              py: 4
            }}
          >
            <Typography
              variant="subtitle1"
              display="flex"
              justifyContent="center"
            >
              Revenue (%)
            </Typography>

            <Typography
              variant="h2"
              fontWeight="600"
              display="flex"
              justifyContent="center"
            >
              28%
            </Typography>
          </Box>

          {/* <Box
            gridColumn="span 2"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper,
              px: 2,
              py: 4
            }}
          >
            <Typography
              variant="subtitle1"
              display="flex"
              justifyContent="center"
            >
              Forecast ($)
            </Typography>

            <Typography
              variant="h2"
              fontWeight="600"
              display="flex"
              justifyContent="center"
            >
              $472
            </Typography>
          </Box>

          <Box
            gridColumn="span 2"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper,
              px: 2,
              py: 4
            }}
          >
            <Typography
              variant="subtitle1"
              display="flex"
              justifyContent="center"
            >
              Forecast (%)
            </Typography>

            <Typography
              variant="h2"
              fontWeight="600"
              display="flex"
              justifyContent="center"
            >
              -5%
            </Typography>
          </Box> */}

          {/* ROW 2 */}
          <Box
            gridColumn="span 10"
            // gridRow="span 2"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              // sx={{ padding: '30px 30px 0 30px' }}
              pt={2}
              display="flex"
              justifyContent="center"
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart />
            </Box>
          </Box>

          {/* ROW 3 */}
          <Box
            gridColumn="span 5"
            // gridRow="span 2"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              // sx={{ padding: '30px 30px 0 30px' }}
              pt={2}
              display="flex"
              justifyContent="center"
            >
              Tech Usage
            </Typography>
            <Box height="250px" mt="-20px">
              <PieChart />
            </Box>
          </Box>

          <Box
            gridColumn="span 5"
            // gridRow="span 2"
            sx={{
              borderRadius: 1,
              backgroundColor: colors.background.paper
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              // sx={{ padding: '30px 30px 0 30px' }}
              pt={2}
              display="flex"
              justifyContent="center"
            >
              Transportation
            </Typography>
            <Box height="250px" mt="-20px">
              <LineChart />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
