import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './footer.css';

function Footer() {
  return (
    <Box component="footer" className="footer" sx={{ py: 2, textAlign: 'center', backgroundColor: '#f8f9fa' }}>
      <Typography variant="body2" color="textSecondary">
        © 2025{' '}
        <Link href="https://hveramtz.dev/" target="_blank" rel="noopener" color="inherit">
          hveramtz.dev
        </Link>
        . Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;