import axios from "axios";
import { useCallback, useState } from "react";

const useTTS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const startStreaming = useCallback(
    async ({ voiceId, text, voiceSettings }) => {
      setIsLoading(true);
      setError("");
      const baseUrl = "https://api.elevenlabs.io/v1/text-to-speech";
      const headers = {
        "Content-Type": "application/json",
        "xi-api-key": import.meta.env.VITE_ELEVENLABS_API_KEY,
      };
      const requestBody = {
        text,
        voice_settings: voiceSettings,
      };

      try {
        const response = await axios.post(
          `${baseUrl}/${voiceId}`,
          requestBody,
          {
            headers,
            responseType: "blob",
          }
        );
        if (response.status === 200) {
          const audio = new Audio(URL.createObjectURL(response.data));
          audio.play();
          return audio;
        } else {
          throw new Error("Unable to stream audio.");
        }
      } catch (error) {
        setError(error.message || "Error: Unable to stream audio.");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { startStreaming, isLoading, error };
};

export default useTTS;
