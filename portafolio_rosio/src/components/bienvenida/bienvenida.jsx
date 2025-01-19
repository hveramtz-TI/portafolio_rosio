import React from 'react';
import './bienvenida.css'; // Importa el archivo CSS
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Stack from '@mui/material/Stack';

function Bienvenida() {
  return (
    <div className='presentacion'>
        <h2 className='nombre'>Rosio Medina</h2>
        <div className='info'>
          <p className='rol'>Ingeniera en Turismo y Hoteleria.</p>
          <Stack direction="row" spacing={1}>
            <Chip icon={<LinkedInIcon></LinkedInIcon>} color="primary"/>
            <Chip icon={<AlternateEmailIcon></AlternateEmailIcon>} color="primary" />
          </Stack>
        </div>
    </div>
  );
}

export default Bienvenida;