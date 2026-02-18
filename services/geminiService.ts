
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

export const getAIStrategyResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `Eres un consultor experto de SantaCasta, una agencia de automatización con IA.
        Tu objetivo es ayudar a los usuarios a entender cómo la IA puede optimizar su negocio.
        Menciona servicios como: Landing Pages, Chatbots IA y Automatización de CRM.
        Sé profesional, persuasivo y mantén las respuestas concisas (máximo 3 párrafos).
        Si el usuario pregunta algo no relacionado con automatización, redirígelo amablemente.`,
        temperature: 0.7,
      },
    });
    return response.text || "Lo siento, tuve un problema analizando tu solicitud. ¿Podrías intentar de nuevo?";
  } catch (error) {
    console.error("AI Error:", error);
    return "En este momento no puedo procesar tu consulta, pero te recomiendo agendar una sesión gratuita de 15 minutos con nuestro equipo.";
  }
};
