import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, Folder, Home, Assignment, Edit } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const drawerWidthExpanded = 240;
const drawerWidthCollapsed = 60;

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const router = useRouter();
  const [openFolders, setOpenFolders] = useState({});

  // Handle navigation and active state styling
  const handleNavigation = (route) => {
    router.push(route);
  };

  const isActive = (route) => router.pathname === route;

  const toggleFolder = (folder) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  // Define pages and folders structure
  const sidebarItems = [
    {
      folder: 'Standalone Pages',
      pages: ['dashboard'],
      isStandalone: true,
    },
    {
      folder: 'customers',
      pages: ['add', 'edit', 'view'],
    },
    {
      folder: 'profiles',
      pages: ['add', 'edit', 'view'],
    },
    {
      folder: 'requirements',
      pages: ['add', 'edit', 'view'],
    },
    {
      folder: 'users',
      pages: ['add', 'edit', 'view'],
    },
  ];

  return (
    <Drawer
      variant="persistent"
      open={isExpanded}
      sx={{
        width: isExpanded ? drawerWidthExpanded : drawerWidthCollapsed,
        '& .MuiDrawer-paper': {
          width: isExpanded ? drawerWidthExpanded : drawerWidthCollapsed,
          boxSizing: 'border-box',
          position: 'fixed',
          top: '75px',
          height: '100vh',
          transition: 'width 0.3s',
          overflow: 'hidden',
          zIndex: 100,
          backgroundColor: '#212121',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {sidebarItems.map(({ folder, pages, isStandalone }) => (
              <Box key={folder}>
                {!isStandalone ? (
                  <>
                    <ListItemButton onClick={() => toggleFolder(folder)}>
                      <Folder sx={{ marginRight: 2, color: 'white' }} />
                      <ListItemText primary={folder} sx={{ color: 'white', display: isExpanded ? 'block' : 'none' }} />
                      {openFolders[folder] ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}
                    </ListItemButton>
                    <Collapse in={openFolders[folder]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {pages.map((page) => (
                          <ListItemButton
                            key={page}
                            onClick={() => handleNavigation(`/${folder}/${page}`)}
                            sx={{
                              pl: 4,
                              backgroundColor: isActive(`/${folder}/${page}`) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                            }}
                          >
                            <ListItemText primary={page} sx={{ color: 'white' }} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  pages.map((page) => (
                    <ListItemButton
                      key={page}
                      onClick={() => handleNavigation(`/${page}`)}
                      sx={{
                        backgroundColor: isActive(`/${page}`) ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
                      }}
                    >
                      <Home sx={{ marginRight: 2, color: 'white' }} />
                      <ListItemText primary={page} sx={{ color: 'white', display: isExpanded ? 'block' : 'none' }} />
                    </ListItemButton>
                  ))
                )}
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
