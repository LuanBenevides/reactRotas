import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem vindo a página HOME</h1>
      <span>Curso de React.js do zero ao profissional</span>
      <br/><br/>
      <Link to="/sobre">Sobre</Link>
      <br/>
      <Link to="/contato">Contato</Link>

      <hr/>

      <Link to="/produto/12345">Acessar o produto 12345</Link>
    </div>
  );
}

export default Home;