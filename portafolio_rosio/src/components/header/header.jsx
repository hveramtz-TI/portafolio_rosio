import React, { useState } from 'react';
import './header.css'; // Importa el archivo CSS
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box } from '@mui/material';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detecta si la pantalla es menor a 800px
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleMenuClose();
  };

  return (
    <div className='header'>
      <AppBar position="relative" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Avatar alt="Logo" src="/img/Captura_de_pantalla_2025-01-16_150610-removebg-preview.webp" sx={{ filter: 'invert(1)' }} />
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleScroll('inicio')} sx={{ fontFamily: 'Playwrite IN, serif'}}>Inicio</MenuItem>
                <MenuItem onClick={() => handleScroll('sobre-mi')} sx={{ fontFamily: 'Playwrite IN, serif' }}>Sobre mí</MenuItem>
                <MenuItem onClick={() => handleScroll('proyectos')} sx={{ fontFamily: 'Playwrite IN, serif' }}>Experiencia</MenuItem>
                <MenuItem onClick={() => handleScroll('contacto')} sx={{ fontFamily: 'Playwrite IN, serif' }}>Certificado</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography onClick={() => handleScroll('inicio')} sx={{ fontFamily: 'Playwrite IN, serif', cursor: 'pointer' }}>Inicio</Typography>
              <Typography onClick={() => handleScroll('sobre-mi')} sx={{ fontFamily: 'Playwrite IN, serif', cursor: 'pointer' }}>Sobre mí</Typography>
              <Typography onClick={() => handleScroll('proyectos')} sx={{ fontFamily: 'Playwrite IN, serif', cursor: 'pointer' }}>Experiencia</Typography>
              <Typography onClick={() => handleScroll('contacto')} sx={{ fontFamily: 'Playwrite IN, serif', cursor: 'pointer' }}>Certificados</Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;