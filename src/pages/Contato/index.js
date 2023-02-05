import React from "react";
import { Link } from "react-router-dom";

function Contato() {
  return (
    <div>
      <h1>Contato da empresa</h1>
      <span>Contato da empresa: (ddd) x xxxx-xxxx</span>
      <br/><br/>
      <Link to="/">Página inicial</Link>
      <br/>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Contato;