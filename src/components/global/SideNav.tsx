import { useContext, useState } from 'react';
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
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext } from '@/config/themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideNav = () => {
  const theme = useTheme();
  const colors = theme.palette;
  const colorMode = useContext(ColorModeContext);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <Sidebar
        breakPoint="md"
        collapsedWidth="5rem"
        width="16rem"
        backgroundColor={colors.background.default}
      >
        <Menu>
          <MenuItem>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {!collapsed && <Box>wAPP</Box>}
              <Box>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </MenuItem>

          <MenuItem
            icon={<HomeOutlinedIcon />}
            rootStyles={{ backgroundColor: colors.background.default }}
            onClick={() => router.push('/')}
          >
            Dashboard
          </MenuItem>

          <SubMenu
            icon={<AdminPanelSettingsOutlinedIcon />}
            title="Components"
            label="Admin"
            defaultOpen
          >
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
              onClick={() => router.push('/admin/users')}
            >
              Users
            </MenuItem>
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
            >
              Contacts Information
            </MenuItem>
          </SubMenu>

          <SubMenu
            icon={<DescriptionOutlinedIcon />}
            title="Components"
            label="Pages"
            defaultOpen
          >
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
            >
              Profile Form
            </MenuItem>
            <MenuItem
              rootStyles={{ backgroundColor: colors.background.default }}
            >
              Login Form
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideNav;
