import { createContext, useState } from "react";
import generate from "../Config/config";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);

  const onSent = async () => {
    setResult(true);
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
    setResult,
    result,
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
