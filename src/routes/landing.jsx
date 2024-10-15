import { BackgroundImage } from "@mantine/core";
import NavBar from "../components/NavBar";
import Home from "../layouts/landing/Home";
import About from "../layouts/landing/About";

// Images
import bgImage from "../assets/images/BG.png";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import DocumentScanner from "../components/DocumentScanner";

const Landing = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <div className="relative isolate min-h-[100dvh]">
        <BackgroundImage src={bgImage} h={4000}>
          <NavBar></NavBar>
          <Home />
          <About />
        </BackgroundImage>
        <DocumentScanner />
      </div>
    </>
  );
};

export default Landing;
