import './App.css';
import Header from './components/header/header';
import Bienvenida from './components/bienvenida/bienvenida';
import Presentacion from './components/presentacion/presentacion';
import { useEffect, useRef } from 'react';
import Certificados from './components/certificados/certificados';
import Experencia from './components/experiencia/experiencia';
import Footer from './components/footer/footer';

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
          <video autoPlay loop muted playsInline className="video-background">
            <source src="/video/greenScreenSnow.webm" type="video/webm" />
          </video>
        </div>
        <div id='inicio'>
          <Bienvenida />
        </div>
      </div>
      <div className='contenido_general'>
        <div id='sobre_mi'>
          <Presentacion />
        </div>
        <div id='experiencia'>
          <Experencia />
        </div>
        <div id='certificados'>
          <Certificados />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;