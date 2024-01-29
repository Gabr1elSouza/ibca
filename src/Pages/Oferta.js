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
      <img
        src="caminho/para/sua/imagem-dizimo.jpg"
        alt="Imagem Dízimo e Oferta"
      />
      <div className="info-banco">
        <h3>Informações Bancárias</h3>
        <p>Banco: Santander</p>
        <p>Agência: XXXX</p>
        <p>Conta: XXXX-XX</p>
        {/* Adicione mais informações bancárias, se necessário */}
      </div>
    </div>
  );
};

export default oferta;
