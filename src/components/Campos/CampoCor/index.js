import "./CampoCor.css";

const CampoCor = (props) => {
  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-cor">
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

export default CampoCor;
