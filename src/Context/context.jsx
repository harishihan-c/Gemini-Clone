import { createContext, useState } from "react";
import generate from "../Config/config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState(""); //For input field
  const [showResult, setShowResult] = useState(false); //
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]); //For Sidebar

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResponse((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async () => {
    setResponse("");
    setShowResult(true);
    setLoading(true);
    setRecentPrompt(input);

    const AIresponse = await generate(input);

    let responseArray = AIresponse.split("**");
    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
    setPrevPrompt(input);
  };

  const contextValue = {
    input,
    setInput,
    onSent,
    showResult,
    setShowResult,
    setLoading,
    loading,
    recentPrompt,
    setRecentPrompt,
    response,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
