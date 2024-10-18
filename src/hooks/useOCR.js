import { useState, useCallback } from "react";
import { createWorker, OEM } from "tesseract.js";

const useOCR = () => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const cleanupText = (rawText) => {
    // Remove non-printable and non-ASCII characters
    let cleanedText = rawText.replace(/[^\x20-\x7E\n\r]/g, "");

    // Replace multiple spaces with a single space
    cleanedText = cleanedText.replace(/\s+/g, " ");

    // Remove spaces at the beginning and end of each line
    cleanedText = cleanedText
      .split("\n")
      .map((line) => line.trim())
      .join("\n");

    // Remove empty lines
    cleanedText = cleanedText
      .split("\n")
      .filter((line) => line.length > 0)
      .join("\n");

    return cleanedText.trim();
  };

  const performOCR = useCallback(async (imageFile) => {
    setIsLoading(true);
    setError(null);
    setText("");
    setProgress(0);

    try {
      const worker = await createWorker("eng", OEM.DEFAULT, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(parseInt(m.progress * 100));
          }
        },
      });
      const {
        data: { text: rawText },
      } = await worker.recognize(imageFile);

      const cleanedText = cleanupText(rawText);

      setText(cleanedText);
      await worker.terminate();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { text, isLoading, progress, error, performOCR };
};

export default useOCR;
