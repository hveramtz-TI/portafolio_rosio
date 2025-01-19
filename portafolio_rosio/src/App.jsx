import './App.css';
import Header from './components/header/header';
import Bienvenida from './components/bienvenida/bienvenida';
import Presentacion from './components/presentacion/presentacion';
import { useEffect, useRef } from 'react';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const contenidoInicio = document.querySelector('.contenido_inicio');
      const contenidoGeneral = document.querySelector('.contenido_general');
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) { // Ajusta este valor según sea necesario
        contenidoInicio.classList.add('scaled');
        contenidoGeneral.classList.add('scrolled');
      } else {
        contenidoInicio.classList.remove('scaled');
        contenidoGeneral.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='contenido_inicio'>
        <div className='background_video'>
          <video autoPlay loop muted className="video-background">
            <source src="/video/greenScreenSnow.webm" type="video/webm" />
          </video>
        </div>
        <Bienvenida />
      </div>
      <div className='contenido_general'>
        <Presentacion />
      </div>
    </div>
  );
}

export default App;