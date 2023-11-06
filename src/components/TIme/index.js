import Colaborador from "../Colaborador";
import "./Time.css"

const Time = (props)=>{
    const css = {backgroundColor:props.corSecundaria}; 
    return(
        props.colaboradores.length > 0 &&
        <section className="time" style={css}>
            <h3  style={{borderColor: props.corPrimaria}} >{props.nome}</h3>
            <div className="colaboradores">{props.colaboradores.map(
                colaborador =>
                    <Colaborador 
                        nome={colaborador.nome} 
                        imgSrc={colaborador.imagem}
                        cargo={colaborador.cargo}
                        key={colaborador.nome}
                        corDeFundo={props.corPrimaria}
                        >
                    </Colaborador>)}
            </div>
        </section>
    )
}

export default Time;