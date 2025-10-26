
import { GoogleGenAI, Type } from "@google/genai";
import { GardenPreferences, GardenPlan } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generateGardenPlan = async (preferences: GardenPreferences): Promise<GardenPlan> => {
    const { width, height, sunlight, style, colors, features } = preferences;

    const prompt = `
      Design a detailed garden layout plan. The garden is a rectangle of ${width} feet by ${height} feet.
      It receives ${sunlight} of direct sunlight daily.
      The desired style is "${style}" with a color palette focused on "${colors}".
      Incorporate these specific features: "${features}".
      
      Generate a response in JSON format according to the provided schema.
      - 'description' should be an evocative paragraph describing the overall layout and flow of the garden.
      - 'ambience' should describe the feeling or mood the garden evokes.
      - 'plantList' should be an array of at least 5 distinct plants suitable for the conditions. For each plant, provide its name, a suggested location within the garden grid (e.g., 'back-left corner', 'along the path'), and a brief description.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        description: { type: Type.STRING, description: "An evocative paragraph describing the overall layout and flow of the garden." },
                        ambience: { type: Type.STRING, description: "The feeling or mood the garden evokes." },
                        plantList: {
                            type: Type.ARRAY,
                            description: "A list of at least 5 suitable plants.",
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    name: { type: Type.STRING, description: "Name of the plant." },
                                    location: { type: Type.STRING, description: "Suggested location within the garden." },
                                    description: { type: Type.STRING, description: "Brief description of the plant." },
                                },
                                required: ["name", "location", "description"],
                            },
                        },
                    },
                    required: ["description", "ambience", "plantList"],
                },
            },
        });

        const planText = response.text.trim();
        return JSON.parse(planText) as GardenPlan;

    } catch (error) {
        console.error("Error generating garden plan:", error);
        throw new Error("Failed to generate garden plan from AI.");
    }
};

const generateGardenImage = async (plan: GardenPlan, preferences: GardenPreferences): Promise<string> => {
    const { style, colors } = preferences;

    const imagePrompt = `
      Create a beautiful, highly detailed, photorealistic image of a dream garden.
      Style: ${style} garden.
      Color Palette: ${colors}.
      Key Elements: ${plan.plantList.map(p => p.name).join(', ')}.
      Ambience: The garden should feel ${plan.ambience}.
      Overall Description: ${plan.description}.
      The image should be from a standing eye-level perspective, capturing the beauty and depth of the space. It's a sunny, pleasant day.
    `;

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: imagePrompt,
            config: {
              numberOfImages: 1,
              aspectRatio: '16:9',
              outputMimeType: 'image/jpeg',
            },
        });
        
        if (!response.generatedImages || response.generatedImages.length === 0) {
            throw new Error("No image was generated.");
        }
        
        return response.generatedImages[0].image.imageBytes;

    } catch (error) {
        console.error("Error generating garden image:", error);
        throw new Error("Failed to generate garden image from AI.");
    }
};

export const generateGardenPlanAndImage = async (preferences: GardenPreferences) => {
    const plan = await generateGardenPlan(preferences);
    const image = await generateGardenImage(plan, preferences);
    return { plan, image };
};
