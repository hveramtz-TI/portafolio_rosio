import React from 'react';
import './bienvenida.css'; // Importa el archivo CSS
import Button from 'react-bootstrap/Button';

function Bienvenida() {
  return (
    <div className='presentacion'>
        <h2 className='nombre'>Rosio Medina</h2>
        <div className='info'>
          <p className='rol'>Ingeniera en Turismo y Hoteleria.</p>
          <Button className='boton-iniciar'>Iniciar</Button>
        </div>
    </div>
  );
}

export default Bienvenida;