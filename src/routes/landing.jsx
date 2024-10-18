import { BackgroundImage } from "@mantine/core";
import NavBar from "../components/NavBar";
import Home from "../layouts/landing/Home";
import About from "../layouts/landing/About";

// Images
import bgImage from "../assets/images/BG.png";

const Landing = () => {
  return (
    <>
      <div className="relative isolate min-h-[100dvh]">
        <BackgroundImage src={bgImage} h={4000}>
          <NavBar></NavBar>
          <Home />
          <About />
        </BackgroundImage>
      </div>
    </>
  );
};

export default Landing;
