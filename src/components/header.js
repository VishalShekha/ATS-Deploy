import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Avatar, Typography, Box } from '@mui/material';
import { Menu as MenuIcon, ExitToApp as ExitIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Sidebar from './sidebar'

const Header = ({ handleMenuClick, menuAnchorEl, toggleSidebar }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, rgb(112, 80, 207), rgba(156, 99, 241, 0.86))' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar} aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src="/Logo-bg.png" alt="Logo" style={{ width: '150px', height: 'auto' }} />
        </Typography>

        <IconButton edge="start" color="inherit" onClick={goBack} aria-label="go back">
          <ArrowBackIcon />
        </IconButton>

        <IconButton onClick={handleMenuClick}>
          <Avatar sx={{ ml: 2 }}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const logout = () => {
    router.push("/login");
    handleMenuClose();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      <Box component="main">

        <Header handleMenuClick={handleMenuClick} menuAnchorEl={anchorEl} toggleSidebar={toggleSidebar} />

        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        >
          <MenuItem onClick={handleMenuClose}>View Profile</MenuItem>
          <MenuItem onClick={logout}>
            <ExitIcon sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Layout;
