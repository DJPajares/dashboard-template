import Header from '@/components/global/Header';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Head from 'next/head';
import { mockDataInvetories } from '@/data/mockData';

const Inventories = () => {
  const theme = useTheme();
  const colors = theme.palette;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 150 }
  ];

  return (
    <>
      <Head>
        <title>Inventories</title>
      </Head>

      <Box p={2}>
        <Header title="Inventories" subtitle="Manage inventories" />

        <Box py={4}>
          <Box>
            <DataGrid
              autoHeight
              columns={columns}
              rows={mockDataInvetories}
              sx={{
                borderColor: colors.background.paper,
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: colors.background.paper,
                  borderColor: colors.background.paper
                },
                '& .MuiDataGrid-cell': {
                  borderColor: colors.background.paper
                },
                '& .MuiDataGrid-footerContainer': {
                  backgroundColor: colors.background.paper,
                  borderColor: colors.background.paper
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Inventories;
