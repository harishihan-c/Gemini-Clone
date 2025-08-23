import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../Context/context";
import generate from "../../Config/config";

function Main() {
  const { 
    setInput,
    input, 
    onSent, 
    showResult, setShowResult,
    setLoading,
    recentPrompt,
    setRecentPrompt,
    response,
    } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.robot} />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello Kate</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, fugit.
                </p>
                <img src={assets.compass} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, fugit.
                </p>
                <img src={assets.bulb} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, fugit.
                </p>
                <img src={assets.message} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, fugit.
                </p>
                <img src={assets.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="reult-title">
              <img src="" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <p>{response}</p>
            
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallary} alt="" />
              <img src={assets.voice} alt="" />
              <img
                onClick={() => {
                  onSent();
                }}
                src={assets.send}
                alt=""
              />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            atque provident quos?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
