import React from "react";
import "./CardAnimation.css";

const CardAnimation = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <input type="radio" name="slice" id="c1" checked />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>Cura</h4>
              <p>Curando vidas.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slice" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Amando</h4>
              <p>Amando vidas!</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slice" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>Transformando</h4>
              <p>Transformando vidas</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slice" id="c4" />
        <label htmlFor="c4" className="card">
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>Levando Jesus</h4>
              <p>Levando Jesus</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CardAnimation;
