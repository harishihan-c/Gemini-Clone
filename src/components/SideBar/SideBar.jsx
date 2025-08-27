import { useContext, useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/context";

const SideBar = () => {
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const [extended, setExtended] = useState(false);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu}
          alt=""
        />

        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.add} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            {prevPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-chat">
                  <img src={assets.chat} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
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
