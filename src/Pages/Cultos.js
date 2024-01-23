// src/components/Cultos.js
import React from "react";
import "./Culto.css";
import { Link } from "react-router-dom";

const cultos = () => {
  return (
    <div>
      <div className="navbar">
        <Link className="Icon"></Link>
        <h1>
          <span>I</span>greja <span>B</span>atista <span>C</span>aminho das
          <span>Á</span>rvores
        </h1>
      </div>
      <div className="info">
        <h2>CULTOS</h2>
        <p>Cultos que acontecem na semana</p>
      </div>
      <div className="cultos-grid">
        <div className="culto">
          <h3>Oração</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/oracao">Clique para Detalhes </Link>
        </div>
        <div className="culto">
          <h3>Tarde das Bençãos </h3>
          {/* Adicione um link para a página específica do Culto 1 */}
          <Link to="/Tarde">Clique para Detalhes </Link>
        </div>
        <div className="culto">
          <h3>OFIR</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/ofir">Clique para Detalhes </Link>
        </div>

        <div className="culto">
          <h3>ATUS</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/atus">Clique para Detalhes </Link>
        </div>
        <div className="culto">
          <h3>EBD</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/ebd">Clique para Detalhes </Link>
        </div>
        <div className="culto">
          <h3>CONECTAR</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/conectar">Clique para Detalhes </Link>{" "}
        </div>
        {/* Adicione mais quadrados para outros cultos, se necessário */}
      </div>
    </div>
  );
};

export default cultos;
