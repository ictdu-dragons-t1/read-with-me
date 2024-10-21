import {BackgroundImage} from "@mantine/core";
import NavBar from "../components/NavBar";
import Home from "../layouts/landing/Home";
import About from "../layouts/landing/About";
import Faqs from "../layouts/landing/Faqs";
import Footer from "../layouts/landing/LandingFooter.jsx";

// Images
import bgImage from "../assets/images/BG.png";

const Landing = () => {
	return (
		<>
			<div className="relative isolate min-h-[100dvh]">
				<BackgroundImage src={bgImage}>
					<NavBar/>
					<Home/>
					<About/>
					<Faqs/>
					<Footer/>
				</BackgroundImage>
			</div>
		</>
	);
};

export default Landing;
