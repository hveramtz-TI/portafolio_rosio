import React from 'react';
import CertificadoSantander from '/img/certificadoSantander.png';
import CertificadoUnab from '/img/certificadoUnab.png';
import CertificadoClientes from '/img/certificadosClientesDificiles.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './certificados.css';

function Certificados() {
  const handleDownload = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='certificados'>
        <h2>Certificados</h2>
        <div className='contenedor_certificados'>
        <Card sx={{ width:'70%' }}>
            <CardActionArea onClick={() => handleDownload('/pdf/certificadoSantanderRosio.pdf')}>
                <CardMedia
                component="img"
                height="140"
                image={CertificadoSantander}
                alt="certificado Santander"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Certificado Transformacion Digital.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Impartido por Santander.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ width:'70%' }}>
            <CardActionArea onClick={() => handleDownload('/pdf/certificadoUnabRosio.pdf')}>
                <CardMedia
                component="img"
                height="140"
                image={CertificadoUnab}
                alt="certificado UNAB"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Certificado Grado Academico.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Impartido por UNAB.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ width: '70%' }}>
            <CardActionArea onClick={() => handleDownload('/pdf/certificadoLesHallesRosio.pdf')}>
                <CardMedia
                component="img"
                height="140"
                image={CertificadoClientes}
                alt="certificado Clientes"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Certificado Clientes Dificiles.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Impartido por la Universidad de los Andes.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    </div>
  );
}

export default Certificados;