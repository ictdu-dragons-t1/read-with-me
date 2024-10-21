import { useState, useRef } from "react";
import { Camera as CameraPro } from "react-camera-pro";
import { Camera, RotateCcw, Save, Upload, X } from "lucide-react";
import { uploadScannedDoc } from "../utils/junoUtils";
import { useShallow } from "zustand/shallow";
import useModalStore from "../stores/useModalStore";

const DocumentScannerModal = () => {
  const [image, setImage] = useState(null);
  const [imageSource, setImageSource] = useState("file");
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const cameraRef = useRef(null);

  const { isScannerModalOpen, closeScannerModal, setCurrentData } = useModalStore(
    useShallow((state) => ({
      isScannerModalOpen: state.isScannerModalOpen,
      closeScannerModal: state.closeScannerModal,
      setCurrentData: state.setCurrentData,
    }))
  );

  const handleSaveDocument = async () => {
    setIsProcessing(true);
    
    const result = await uploadScannedDoc(image.file);
    setCurrentData(result);
    setImage(null);
    alert("Document saved successfully!");

    closeScannerModal();
    setIsProcessing(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage({ src: URL.createObjectURL(file), file });
    }
  };

  const capturePhoto = async () => {
    const imageString = cameraRef.current.takePhoto();
    const imageFile = await fetch(imageString).then((res) => res.blob());
    setImage({ src: URL.createObjectURL(imageFile), file: imageFile });
  };

  if (!isScannerModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md relative">
        <button
          onClick={closeScannerModal}
          className="absolute top-2 right-2 text-indigo-400 hover:text-indigo-600 transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <div className="space-y-4">
          {image ? (
            <div className="space-y-4">
              <div className="relative aspect-[3/4] w-full rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image.src}
                  alt="Scanned document"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    setImage(null);
                    setImageSource("camera");
                  }}
                  className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                  disabled={isProcessing}
                >
                  <RotateCcw className="mr-2" size={20} />
                  Retake
                </button>
                <button
                  onClick={handleSaveDocument}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out flex items-center"
                  disabled={isProcessing}
                >
                  <Save className="mr-2" size={20} />
                  {isProcessing ? "Processing..." : "Save"}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {imageSource === "camera" ? (
                <div className="relative aspect-[3/4] w-full rounded-lg shadow-lg overflow-hidden">
                  <CameraPro
                    ref={cameraRef}
                    numberOfCamerasCallback={(numOfCameras) => {
                      if (numOfCameras > 1) {
                        cameraRef.current.switchCamera();
                      }
                    }}
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
                    Upload File
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

export default DocumentScannerModal;
