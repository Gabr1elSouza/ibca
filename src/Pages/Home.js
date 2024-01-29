// Home.js
import React from "react";
import "./Home.css";
import CardAnimation from "../Components/CardAnimation";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Link className="Icon"></Link>
        <h1>
          <span>I</span>greja <span>B</span>atista <span>C</span>aminho das
          <span>Á</span>rvores
        </h1>
      </div>

      <div className="cta">
        <h2>Bem-vindo ao NOVO!</h2>
        {/* Adicione conteúdo da chamada para ação aqui */}
      </div>

      <CardAnimation />
      {/* Adicione conteúdo do card animado aqui */}

      <div className="themes">
        <div className="theme">
          <h3>Visão</h3>
          <p>
            <ul>
              <li> Vidas Transformadas</li>
              <li>Famílias Estruradas</li>
              <li>Pessoas Saradas</li>
              <li>Igreja Fortalecida</li>
            </ul>
          </p>
        </div>
        <div className="theme">
          <h3>Missão</h3>
          <p>
            <span>ALCANÇAR VIDAS COM</span>
            <ul>
              <li>Amor</li>e<li>Serviço</li>
            </ul>
            <span>
              ENSINNANDO A TRILHAR O CAMINHO <br />
              DA FÉ E SALVAÇÃO = JESUS
            </span>
          </p>
        </div>
      </div>
      <div className="cta_s">
        <h2>Clique nos icones abaixo para mais interações</h2>
        {/* Adicione conteúdo da chamada para ação aqui */}
      </div>
    </div>
  );
};

export default Home;
