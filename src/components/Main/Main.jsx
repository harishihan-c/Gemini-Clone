import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.robot} />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello Kate</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugit.</p>
            <img src={assets.compass} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugit.</p>
            <img src={assets.bulb} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugit.</p>
            <img src={assets.message} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, fugit.</p>
            <img src={assets.code} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt" />
            <div>
              <img src={assets.gallary} alt="" />
              <img src={assets.voice} alt="" />
              <img src={assets.send} alt="" />
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque atque provident quos?</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
