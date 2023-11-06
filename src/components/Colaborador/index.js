import "./Colaborador.css"

const Colaborador = ({nome, imgSrc, cargo, corDeFundo}) =>{
    return(<div className="colaborador">
        <div className="cabecalho" style={{backgroundColor:corDeFundo}}>
            <img src={imgSrc} alt={nome}/>
        </div>
        <div className="rodape">
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador