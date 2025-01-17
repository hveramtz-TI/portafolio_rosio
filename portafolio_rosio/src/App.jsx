import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Bienvenida from './components/bienvenida/bienvenida';
import Presentacion from './components/presentacion/presentacion';

function App() {
  return (
    <div className="App">
      <Header />
      <Bienvenida />
      <Presentacion/>
    </div>
  );
}

export default App;