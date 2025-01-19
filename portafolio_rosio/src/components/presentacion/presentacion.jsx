import React from 'react';
import './presentacion.css'; // Importa el archivo CSS
import { Avatar, Card, CardContent, CardMedia } from '@mui/material';

function Presentacion() {
  return (
    <div className="presentacion_general">
      <div className='contenedor_img'>
        <Card className='card_presentacion'>
          <Avatar className='avatar_presentacion' alt="Rosio" src="/img/rosio.jpg"></Avatar>
        </Card>
      </div>
      <div className='contenedor_card'>
        <Card className='card_presentacion'>
          <CardContent>
            <h1 className='titulo_presentacion' >¡Hola! Soy Rosio</h1>
            <p className='descripcion_presentacion'>Soy una persona aficionada de la hotelería, la administración,
              gestión/organización de eventos y el orden organizacional. Por
              lo mismo, luego de prácticas laborales he encontrado mi primer
              trabajo en Hotel Radisson Curicó que facilita la puesta en práctica
              de mis conocimientos académicos logrando trabajar de forma
              eficiente, aprender de una gran marca del rubro hotelero y crecer
              laboralmente en conjunto al equipo de trabajo de recepción.
              Aspiro a grandes logros y metas personales a futuro en la hotelería
              a nivel nacional buscando aprender constantemente.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Presentacion;