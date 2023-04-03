import Header from '@/components/global/Header';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Head from 'next/head';
import { mockDataUsers } from '@/data/mockData';

const Users = () => {
  const theme = useTheme();
  const colors = theme.palette;

  const columns: GridColDef[] = [
    {
      field: 'image',
      headerName: 'Image',
      width: 100,
      sortable: false,
      renderCell: (params) => <Avatar src={params.value} alt="user" />
    },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90
    },
    { field: 'role', headerName: 'Role', width: 300 }
  ];

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <Box p={2}>
        <Header title="Users" subtitle="Manage users" />

        <Box py={4}>
          <Box>
            <DataGrid
              checkboxSelection
              autoHeight
              columns={columns}
              rows={mockDataUsers}
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

export default Users;
