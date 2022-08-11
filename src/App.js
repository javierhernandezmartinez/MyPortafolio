import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import PrimeReact from 'primereact/api';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;