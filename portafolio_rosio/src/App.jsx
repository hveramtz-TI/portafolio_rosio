import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Bienvenida from './components/bienvenida/bienvenida';
import Presentacion from './components/presentacion/presentacion';

function App() {
  return (
    <div className="App">
      <div>
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