import { Login } from "../components/Login";

// Images
// import bgImage from "../assets/images/BG.png";
// import monitor from "../assets/images/3dMonitor.png";

const Landing = () => {
  return (
    <div className="relative isolate min-h-[100dvh]">
      <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]">
        <h1 className="dark:text-white text-5xl md:text-6xl font-extrabold md:pt-16">
          Read With Me Landing
        </h1>
        <Login />
      </main>
    </div>
  );
};

export default Landing;
