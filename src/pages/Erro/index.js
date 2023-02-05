import { Link } from 'react-router-dom';

function Erro(){
    return(
        <div>
            <h2>Ops... Parce que essa página não existe!</h2>
            <br/><br/>
            <span>
                Encontramos estas páginas...
            </span><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link><br/>
        </div>
    )
}

export default Erro;