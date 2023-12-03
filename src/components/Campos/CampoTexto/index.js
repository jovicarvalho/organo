import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        type={props.tipo}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        onChange={aoDigitar}
        value={props.valor}
      />
    </div>
  );
};

export default CampoTexto;
