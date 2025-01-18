import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Bienvenida from './components/bienvenida/bienvenida';
import Presentacion from './components/presentacion/presentacion';
import { useEffect } from 'react';

function App() {
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
      <div className='header'>
        <Header />
      </div>
      <div className='contenido_inicio'>
        <Bienvenida />
      </div>
      <div className='contenido_general'>
        <Presentacion/>
      </div>
    </div>
  );
}

export default App;