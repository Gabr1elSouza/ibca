import React from "react";
import "./Localiza.css";

const localiza = () => {
  return (
    <div>
      <h1>Localização</h1>
      <h2>Estamos localizados em:</h2>
      <div className="mapa">
        <img src="" alt="Localiza" />
        <p>
          Rua Jesus Cristo de Nazaré, 1 - Itaigara, Salvador - BA, 41830-496 -
          Brasil
        </p>
        <label htmlFor="c1" className="qrcode" />
      </div>
    </div>
  );
};

export default localiza;
