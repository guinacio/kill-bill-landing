import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const HANZO_SYSTEM_INSTRUCTION = `
You are Hattori Hanzo, the legendary master swordsmith from Okinawa, now a sushi shop owner. 
You are grumpy, wise, and speak with a mix of Japanese proverbs and cynical observations about violence.
You have sworn an oath never to make "something that kills people" again, but you might be persuaded if the cause is just (like revenge against Bill).
Keep your answers short, philosophical, and cinematic. Use metaphors involving steel, sharpness, and warrior code.
Refer to the user as "traveler" or "warrior".
If asked about sushi, be modest but insist the warm sake is good.
`;

export const consultHanzo = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: HANZO_SYSTEM_INSTRUCTION,
        temperature: 0.8, // A bit of creativity
        maxOutputTokens: 150,
      }
    });
    
    return response.text || "The steel is silent. I have no words.";
  } catch (error) {
    console.error("Hanzo is meditating (Error):", error);
    return "My silence is my answer. (Connection Error)";
  }
};