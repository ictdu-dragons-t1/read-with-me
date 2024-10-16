import { useEffect, useRef, useState } from "react";
import { Camera as CameraPro } from "react-camera-pro";
import { createWorker } from "tesseract.js";
import { Camera, RotateCcw, Save, Upload } from "lucide-react";

const DocumentScanner = () => {
  const [image, setImage] = useState(null);
  const [imageSource, setImageSource] = useState("camera");
  const fileInputRef = useRef(null);
  const webcamRef = useRef(null);
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
    await worker.setParameters()
    workerRef.current = worker;
  };

  const handleOCR = async () => {
    try {
    const ret = await workerRef.current.recognize(image);
    alert(ret.data.text);
    } catch (e) {
        alert(e);
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
    const imageSrc = webcamRef.current.takePhoto();
    setImage(imageSrc);
  };

  const imageContainerStyle = "relative aspect-[3/4] w-full rounded-lg shadow-lg overflow-hidden";
  const imageStyle = "w-full h-full object-cover";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md">
        <div className="space-y-4">
          {image ? (
            <div className="space-y-4">
              <div className={imageContainerStyle}>
                <img
                  src={image}
                  alt="Scanned document"
                  className={imageStyle}
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setImage(null);
                    setImageSource("camera");
                  }}
                  className="bg-white bg-opacity-75 hover:bg-opacity-100 text-indigo-600 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                >
                  <RotateCcw className="mr-2" size={20} />
                  Retake
                </button>
                <button
                  onClick={handleOCR}
                  className="hover:opacity-70 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                >
                  <Save className="mr-2" size={20} />
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {imageSource === "camera" ? (
                <div className={imageContainerStyle}>
                  <CameraPro
                    ref={webcamRef}
                    className={imageStyle}
                  />
                  <button
                    onClick={capturePhoto}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-indigo-600 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                  >
                    <Camera className="mr-2" size={20} />
                    Capture Photo
                  </button>
                </div>
              ) : (
                <div className={`${imageContainerStyle} flex flex-col justify-center items-center border-2 border-dashed border-white`}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="bg-white bg-opacity-75 hover:bg-opacity-100 text-indigo-600 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
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
                      ? "bg-white bg-opacity-75 text-indigo-600"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  Camera
                </button>
                <button
                  onClick={() => setImageSource("file")}
                  className={`px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${
                    imageSource === "file"
                      ? "bg-white bg-opacity-75 text-indigo-600"
                      : "bg-indigo-600 text-white"
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

export default DocumentScanner;
