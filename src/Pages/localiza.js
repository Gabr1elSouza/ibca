import React from "react";
import "./Localiza.css";
import TopBar from "../Components/topBar/TopBar";

const Localiza = () => {
  return (
    <div className="container-localizacao">
      <TopBar />
      <div className="content-localizacao">
        <h2>Estamos localizados em:</h2>
        <div id="map"></div>
        <div className="mapa">
          <p className="text-light fs-medium p-3">
            Escaneie o QR CODE e acesse a localização no mapa
          </p>
          <img src={require("../assets/images/Localização.png")} id="qrcode-map" alt="Localiza" />
          <p className="text-light fs-large">
            Rua Jesus Cristo de Nazaré, 1 - Itaigara, Salvador - BA, 41830-496 -
            Brasil
          </p>
        </div>
      </div>
    </div>
  );
};

export default Localiza;
