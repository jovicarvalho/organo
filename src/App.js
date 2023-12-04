import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";
import { v4 as uuid } from "uuid";
import Team from "./components/Team";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuid(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuid(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuid(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuid(),
      nome: "UX e Design",
      cor: "#D86EBF",
    },
    {
      id: uuid(),
      nome: "Mobile",
      cor: "#FEBA05",
    },
    {
      id: uuid(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nome: "João Vitor Nunes Carvalho",
      cargo: "Developer",
      imagem: "https://github.com/jovicarvalho.png",
      time: "Front-End",
    },
  ]);

  const aoNovoColaboradorAdcionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id),
    );
  };

  const mudarCorTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      }),
    );
  };
  const cadastrarTime = (novoTime) => {
    setTimes([{ ...novoTime, id: uuid() }, ...times]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        aoNovoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdcionado(colaborador)
        }
        times={times.map((time) => time.nome)}
      />
      {times.map((time) => (
        <Team
          id={time.id}
          mudarCorTime={mudarCorTime}
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome,
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
