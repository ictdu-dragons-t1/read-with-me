import { useState, useRef, useEffect } from "react";
import { Camera as CameraPro } from "react-camera-pro";
import { Camera, RotateCcw, Save, Upload, X } from "lucide-react";
import PropTypes from "prop-types";
import { createWorker } from "tesseract.js";

const DocumentScannerModal = ({ isOpen, onClose, onDocumentScanned }) => {
  const [image, setImage] = useState(null);
  const [imageSource, setImageSource] = useState("camera");
  const [extractedText, setExtractedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const cameraRef = useRef(null);
  const workerRef = useRef(null);

  useEffect(() => {
    initializeWorker();
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  const initializeWorker = async () => {
    const worker = await createWorker("eng");
    workerRef.current = worker;
  };

  const processExtractedText = (text) => {
    // Split the text into words
    const words = text.split(/\s+/);

    // Filter out non-word strings and very short strings
    const filteredWords = words.filter((word) => {
      // Remove any non-alphanumeric characters
      const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
      // Check if the cleaned word is at least 2 characters long and contains at least one letter
      return cleanWord.length >= 2 && /[a-zA-Z]/.test(cleanWord);
    });

    // Join the filtered words back into a string
    return filteredWords.join(" ");
  };

  const handleScanDocument = async () => {
    if (!image) {
      return;
    }

    setIsProcessing(true);
    try {
      const {
        data: { text },
      } = await workerRef.current.recognize(image);
      const processedText = processExtractedText(text);
      setExtractedText(processedText);
      onDocumentScanned(processedText);
    } catch (error) {
      console.error("Error during OCR:", error);
      setExtractedText("Error extracting text. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const capturePhoto = () => {
    const imageSrc = cameraRef.current.takePhoto();
    setImage(imageSrc);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-indigo-400 hover:text-indigo-600 transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <div className="space-y-4">
          {image ? (
            <div className="space-y-4">
              <div className="relative aspect-[3/4] w-full rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt="Scanned document"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setImage(null);
                    setImageSource("camera");
                    setExtractedText("");
                  }}
                  className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                  disabled={isProcessing}
                >
                  <RotateCcw className="mr-2" size={20} />
                  Retake
                </button>
                <button
                  onClick={handleScanDocument}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                  disabled={isProcessing}
                >
                  <Save className="mr-2" size={20} />
                  {isProcessing ? "Processing..." : "Extract Text"}
                </button>
              </div>
              {extractedText && (
                <div className="mt-4 p-4 bg-white bg-opacity-20 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Extracted Text:
                  </h3>
                  <p className="text-sm">{extractedText}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {imageSource === "camera" ? (
                <div className="relative aspect-[3/4] w-full rounded-lg shadow-lg overflow-hidden">
                  <CameraPro
                    ref={cameraRef}
                    facingMode="environment"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={capturePhoto}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-40 hover:bg-opacity-60 text-indigo-600 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                  >
                    <Camera className="mr-2" size={20} />
                    Capture Photo
                  </button>
                </div>
              ) : (
                <div className="relative aspect-[3/4] w-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-2 border-dashed border-indigo-200 border-opacity-50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="bg-white bg-opacity-40 hover:bg-opacity-60 text-indigo-600 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                  >
                    <Upload className="mr-2" size={20} />
                    Upload Image
                  </button>
                </div>
              )}
              <div className="flex justify-center space-x-4 mt-4">
                <button
                  onClick={() => setImageSource("camera")}
                  className={`px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${
                    imageSource === "camera"
                      ? "bg-white bg-opacity-40 text-indigo-600"
                      : "bg-indigo-600 bg-opacity-40 text-white"
                  }`}
                >
                  Camera
                </button>
                <button
                  onClick={() => setImageSource("file")}
                  className={`px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${
                    imageSource === "file"
                      ? "bg-white bg-opacity-40 text-indigo-600"
                      : "bg-indigo-600 bg-opacity-40 text-white"
                  }`}
                >
                  File Upload
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

DocumentScannerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDocumentScanned: PropTypes.func.isRequired,
};

export default DocumentScannerModal;
