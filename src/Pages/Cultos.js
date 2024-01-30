// src/components/Cultos.js
import React from "react";
import "./Culto.css";
import { Link } from "react-router-dom";
import TopBar from "../Components/topBar/TopBar";

const cultos = () => {
  return (
    <div>
      <TopBar/>
      <div className="info">
        <h2>CULTOS</h2>
        <p>Cultos que acontecem na semana</p>
      </div>
      <div className="cultos-grid">
        <div className="culto">
          <h3>Oração</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/oracao">Segunda-feira ás 6h</Link>
        </div>
        <div className="culto">
          <h3>Tarde das Bençãos </h3>
          {/* Adicione um link para a página específica do Culto 1 */}
          <Link to="/Tarde">Terça-feira ás 15h </Link>
        </div>
        <div className="culto">
          <h3>OFIR</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/ofir">Quarta-feiras ás 19h </Link>
        </div>

        <div className="culto">
          <h3>ATUS</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/atus">Sábado ás 14:30 e 17h </Link>
        </div>
        <div className="culto">
          <h3>EBD</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/ebd">Domingo ás 7h e 10h30 </Link>
        </div>
        <div className="culto">
          <h3>CONECTAR</h3>
          {/* Adicione um link para a página específica do Culto 2 */}
          <Link to="/conectar">Domingo ás 18h </Link>{" "}
        </div>
        {/* Adicione mais quadrados para outros cultos, se necessário */}
      </div>
    </div>
  );
};

export default cultos;
