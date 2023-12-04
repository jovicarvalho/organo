import Colaborador from "../Colaborador";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

const Team = ({ colaboradores, cor, nome, aoDeletar, mudarCorTime, id }) => {
  const css = { backgroundColor: hexToRgba(cor, "0.6") };
  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input
          value={cor}
          onChange={(event) => mudarCorTime(event.target.value, id)}
          type="color"
          className="input-cor"
        ></input>
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => (
            <Colaborador
              id={colaborador.id}
              nome={colaborador.nome}
              imgSrc={colaborador.imagem}
              cargo={colaborador.cargo}
              key={colaborador.nome}
              corDeFundo={cor}
              aoDeletar={aoDeletar}
            ></Colaborador>
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
