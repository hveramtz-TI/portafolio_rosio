import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Bienvenida from './components/bienvenida/bienvenida';

function App() {
  return (
    <div className="App">
      <Header />
      <Bienvenida />
      
    </div>
  );
}

export default App;