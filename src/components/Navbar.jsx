import React from 'react'
import { AppBar, Typography, Box, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="inherit" style={{ boxShadow: '0px 0px 0px 0px'}}>
      <Toolbar style={{justifyContent: 'flex-end'}}>
      <Typography variant="h6" fontWeight="bold">
          Apply Now
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar