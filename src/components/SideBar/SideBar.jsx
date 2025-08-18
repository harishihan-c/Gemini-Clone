import React from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu} alt="" />

        <div className="new-chat">
          <img src={assets.add} alt="" />
          <p>New Chat</p>
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-chat">
            <img src={assets.chat} alt="" />
            <p>What is JS ...</p>
          </div>
          <div className="recent-chat">
            <img src={assets.chat} alt="" />
            <p>What is JS ....</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item recent-chat">
          <img src={assets.question} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-chat">
          <img src={assets.history} alt="" />
          <p>History</p>
        </div>
        <div className="bottom-item recent-chat">
          <img src={assets.setting} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
