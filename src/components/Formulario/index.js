import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoNovoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const cadastrarTime = (event) => {
    event.preventDefault();
    props.cadastrarTime({
      nome: nomeTime,
      cor: corTime,
    });
    setNomeTime("");
    setCorTime("");
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do DBServante..."
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Cargo"
          placeholder="Digite o cargo do DBServante..."
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Imagem"
          placeholder="Enviei o link da imagem..."
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        ></ListaSuspensa>
        <Botao>Criar Card</Botao>
      </form>
      <form onSubmit={cadastrarTime}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          obrigatorio
          label="Nome do time"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
