import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar
} from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { Avatar } from '@mui/material';

const SideNav = () => {
  const theme = useTheme();
  const colors = theme.palette;
  const { collapseSidebar, collapsed, broken } = useProSidebar();

  const userImage =
    'https://media.gq.com/photos/5caf9c876328030f7944ecc1/1:1/w_3603,h_3603,c_limit/keanu-reeves-gq-cover-may-2019-social.jpg';

  const imageSize = collapsed ? 30 : 100;
  const router = useRouter();

  return (
    <Sidebar
      breakPoint="xs"
      collapsedWidth="5rem"
      width="16rem"
      backgroundColor={colors.background.default}
      style={{ zIndex: 1150 }}
    >
      <Box py={1}>
        <Menu
          menuItemStyles={{
            button: () => {
              return {
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: colors.primary.main
                }
              };
            }
          }}
        >
          {/* HEADER */}
          <MenuItem>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {!collapsed && (
                <Box pr={2} onClick={() => router.push('/')}>
                  <Typography fontSize={20} fontFamily="Sigmar One">
                    WAPP
                  </Typography>
                </Box>
              )}
              {!broken && (
                <Box>
                  <IconButton onClick={() => collapseSidebar()}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </Box>
          </MenuItem>

          {/* USER */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              py: 1
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 1
              }}
            >
              <Avatar
                src={userImage}
                alt="profile picture"
                sx={{ height: imageSize, width: imageSize }}
              />
            </Box>
            {!collapsed && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  py: 1
                }}
              >
                <Typography
                  variant="h5"
                  color={colors.primary.main}
                  fontWeight={700}
                >
                  Dall-e
                </Typography>
              </Box>
            )}
          </Box>

          {/* DASHBOARD */}
          <MenuItem
            icon={<HomeOutlinedIcon />}
            rootStyles={{ backgroundColor: colors.background.default }}
            onClick={() => router.push('/')}
          >
            <Typography sx={{ fontSize: '0.9rem' }}>Dashboard</Typography>
          </MenuItem>

          {/* ADMIN */}
          <SubMenu
            icon={<AdminPanelSettingsOutlinedIcon />}
            title="Components"
            label="Admin"
            rootStyles={{ fontSize: '0.9rem' }}
            defaultOpen
          >
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
              onClick={() => router.push('/admin/users')}
            >
              <Typography variant="subtitle2">Users</Typography>
            </MenuItem>
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
            >
              <Typography variant="subtitle2">Contacts</Typography>
            </MenuItem>
          </SubMenu>

          {/* FORMS */}
          <SubMenu
            icon={<DescriptionOutlinedIcon />}
            title="Components"
            label="Forms"
            rootStyles={{ fontSize: '0.9rem' }}
            defaultOpen
          >
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
            >
              <Typography variant="subtitle2">User Form</Typography>
            </MenuItem>
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
            >
              <Typography variant="subtitle2">Inventory Form</Typography>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default SideNav;
