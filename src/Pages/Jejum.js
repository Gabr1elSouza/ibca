import { Link } from "react-router-dom";
import "./Jejum.css";

const Jejum = () => {
  return (
    <div className="Wrapper">
      <div className="navbar">
        <Link className="Icon"></Link>
        <h1>
          <span>I</span>greja <span>B</span>atista <span>C</span>aminho das
          <span>Á</span>rvores
        </h1>
      </div>
      <div className="title">
        <h1>Jejum de 366 Dias</h1>
      </div>
      <div className="info">
        <h4>
          No ano de 2024, com a direção do Espírito Santo de Deus, a nossa
          liderança, através do Bispo Átila Jr e da Bispa Tatiana, estão
          implantando em nossa igreja um Jejum intermitente de 366 dias.
        </h4>
        <h4>
          Do dia 1/1/24 até o dia 31/12/24, teremos ao menos uma pessoa ao dia
          jejuando em razão da nossa Igreja, estando todos unidos em um só
          propósito, de fortalecer o Corpo Ministerial da IBCA.
        </h4>
        <div className="cpa-1">
          <h3>
            Vai ser uma benção, não deixe de participar e estar conosco seguindo
            esse direcionamento do Senhor para o fortalecimento do nosso
            Ministério!
          </h3>
        </div>
      </div>
      <div className="cpa-2">
        <h3>
          Mais informações podem ser obtidas através do QR Code, <br />
          link de inscrição ou em nosso Canal de atendimento no <br />
          WhatsApp (71) 3016-9400 em horário comercial.
        </h3>
      </div>
      <div className="qr">
        <img src="../../puclic/JejumQrcode.png" alt="qrcode " />
      </div>
    </div>
  );
};

export default Jejum;
