import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    // Check if API key exists; if not, return null (handle gracefully in UI)
    const apiKey = process.env.API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({ apiKey });
};

export const sendMessageToRobot = async (message: string): Promise<string> => {
    const ai = getClient();
    if (!ai) {
        return "System Warning: Neural Link Disconnected (API Key missing).";
    }

    try {
        const model = 'gemini-2.5-flash-latest'; // Fast, responsive model for chat
        const systemInstruction = `
            You are FACTOBOT, the advanced humanoid operating system developed by FACTOMIND. 
            Your persona is sophisticated, helpful, futuristic, yet warm and approachable.
            You are designed to assist with household tasks, complex logic, and companionship.
            Keep answers concise (under 80 words), elegant, and professional. 
            Refer to "FACTOMIND" as your creator. 
            If asked about technical specs: You have 48DoF, 12-hour battery life, and run on the Gemini Neural Engine.
        `;

        const response = await ai.models.generateContent({
            model: model,
            contents: message,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            }
        });

        return response.text || "Processing complete. Awaiting input.";
    } catch (error) {
        console.error("Gemini Error:", error);
        return "Diagnostic Error: Unable to process request at this time.";
    }
};