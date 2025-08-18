import { useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu} alt="" />

        <div className="new-chat">
          <img src={assets.add} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
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
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-chat">
          <img src={assets.question} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-chat">
          <img src={assets.history} alt="" />
          {extended ? <p>History</p> : null}
        </div>
        <div className="bottom-item recent-chat">
          <img src={assets.setting} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
