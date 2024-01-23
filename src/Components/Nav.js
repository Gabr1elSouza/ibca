import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const handleItemClick = (index) => {
    // Remove a classe 'active' de todos os itens da lista
    document.querySelectorAll(".list").forEach((item) => {
      item.classList.remove("active");
    });

    // Adiciona a classe 'active' apenas ao item clicado
    document
      .querySelector(`.list:nth-child(${index + 1})`)
      .classList.add("active");
  };

  return (
    <div className="navigation">
      <div className="navigation-wrapper">
        <ul>
          <li className="list active" onClick={() => handleItemClick(0)}>
            <Link to="/">
              <span className="icon">
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li className="list" onClick={() => handleItemClick(1)}>
            <Link to="/oferta">
              <span className="icon">
                <ion-icon name="cash-outline"></ion-icon>
              </span>
              <span className="text">Oferta</span>
            </Link>
          </li>
          <li className="list" onClick={() => handleItemClick(2)}>
            <Link to="/cultos">
              <span className="icon">
                <ion-icon name="hand-left-outline"></ion-icon>
              </span>
              <span className="text">Cultos</span>
            </Link>
          </li>
          <li className="list" onClick={() => handleItemClick(3)}>
            <Link to="/jejum">
              <span className="icon">
                <ion-icon name="fish-outline"></ion-icon>
              </span>
              <span className="text">Jejum</span>
            </Link>
          </li>
          <li className="list" onClick={() => handleItemClick(4)}>
            <Link to="/localiza">
              <span className="icon">
                <ion-icon name="compass-outline"></ion-icon>
              </span>
              <span className="text">Local</span>
            </Link>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
