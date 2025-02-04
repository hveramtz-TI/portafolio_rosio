import React, { useState } from 'react';
import './bienvenida.css'; // Importa el archivo CSS
import Chip from '@mui/material/Chip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Bienvenida() {
  const [open, setOpen] = useState(false);

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/rosio-medina-gonzalez-9528b3257/', '_blank');
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText('rosio.medina@example.com');
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className='presentacion'>
        <h2 className='nombre'>Rosio Medina</h2>
        <div className='info'>
          <p className='rol'>Ingeniera en Turismo y Hoteleria.</p>
          <Stack direction="row" spacing={1}>
            <Chip 
              icon={<LinkedInIcon />} 
              color="primary" 
              onClick={handleLinkedInClick} 
            />
            <Chip 
              icon={<AlternateEmailIcon />} 
              color="primary" 
              onClick={handleEmailClick} 
            />
          </Stack>
        </div>
        <Snackbar 
          open={open} 
          autoHideDuration={6000} 
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Correo copiado al portapapeles!
          </Alert>
        </Snackbar>
    </div>
  );
}

export default Bienvenida;