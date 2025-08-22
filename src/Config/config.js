import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyA7QAMxdfKD8OQAWU1Pok86_up6OF2tf6A",
});

async function generate(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  const responseResult = response.text;
  return responseResult
}

export default generate;
