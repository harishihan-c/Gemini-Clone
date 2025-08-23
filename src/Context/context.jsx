import { createContext, useState } from "react";
import generate from "../Config/config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");  //For input field
  const [showResult, setShowResult] = useState(false);  //
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]); //For Sidebar

  const onSent = async () => {
    setShowResult(true);
    setLoading(true);

    const AIresponse = await generate(input);
    
    setRecentPrompt(input);
    setResponse(AIresponse);
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
    recentPrompt,
    setRecentPrompt,
    response,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
