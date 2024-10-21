import NavBar from "../components/NavBar";
import Home from "../layouts/landing/Home";
import About from "../layouts/landing/About";
import Faqs from "../layouts/landing/Faqs";
import Footer from "../layouts/landing/LandingFooter.jsx";

const Landing = () => {
  return (
    <>
      <div className="bg-[url('../src/assets/images/BG.png')] bg-cover">
        <NavBar />
        <Home />
        <About />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
