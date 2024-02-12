import { Link } from "react-router-dom";
import "./Oferta.css";
const oferta = () => {
  return (
    <div className="dizimo-oferta">
      <div className="navbar">
        <Link className="Icon"></Link>
        <h1>
          <span>I</span>greja <span>B</span>atista <span>C</span>aminho das
          <span>Á</span>rvores
        </h1>
      </div>
      <h2>Dízimo e Oferta</h2>
      <div className="chamada">
        <h3>Faça sua parte!</h3>
      </div>
      <img
        id="qrcode-oferta"
        src={require("../assets/images/QrCodeOferta.png")}
        alt="Imagem Dízimo e Oferta"
      />
      <div className="info-banco">
        {/* Adicione mais informações bancárias, se necessário */}
        <div className="pix">
          <h4>Chave Pix:</h4>
          <p>
            <span>OFERTA@IBCA.ORG.BR</span>
          </p>
          <p className="name">
            Ministério Batista Internacional Caminho das Árvores
          </p>
        </div>
        <div className="banco">
          <h3>Informações Bancárias:</h3>
          <p>
            Banco: <span>Santander</span>
          </p>
          <p>
            Agência: <span>0797</span>
          </p>
          <p>
            Conta: <span>130016143</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default oferta;
