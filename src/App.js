import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';


function App() {
  const [colaboradores, setColaboradores] = useState([])
  

  const aoNovoColaboradorAdcionado = (colaborador) => {
        console.log(colaborador)
        setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario aoNovoColaboradorCadastrado ={colaborador => aoNovoColaboradorAdcionado(colaborador)}/>
    </div>
  );
}

export default App;
