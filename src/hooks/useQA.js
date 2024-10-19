import { useCallback, useState } from "react";
import { HfInference } from "@huggingface/inference";

const useQA = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const createQuestions = useCallback(async (imageData, numOfQuestions = 5) => {
    setIsLoading(true);
    setError("");

    try {
      const mistral = new HfInference(
        import.meta.env.VITE_MISTRAL_API_KEY
      ).endpoint("https://api.mistral.ai");

      let out = "";
      for await (const chunk of mistral.chatCompletionStream({
        model: "open-mistral-nemo",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Make ${numOfQuestions} multiple questions from the document.`,
              },
              {
                type: "image_url",
                image_url: URL.createObjectURL(imageData),
              },
            ],
          },
        ],
        max_tokens: 500,
        temperature: 0.1,
        seed: 0,
      })) {
        if (chunk.choices && chunk.choices.length > 0) {
          out += chunk.choices[0].delta.content;
        }
      }

      return out.trim();
    } catch (error) {
      setError(error.message || "Error: Unable to generate questions.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { createQuestions, isLoading, error };
};

export default useQA;
