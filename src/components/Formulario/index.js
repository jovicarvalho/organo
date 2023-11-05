import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = () =>{
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do DBServante"/>
                <CampoTexto label="Cargo" placeholder="Digite o cargo do DBServante" />
                <CampoTexto label="Imagem" placeholder="Digite o nomne do DBServante"/>
            </form>
        </section>
    )
}

export default Formulario;