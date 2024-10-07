import bgImage from "../assets/images/BG.png";
export const Background = () => {
  return (
    <div>
      <img
        src={bgImage}
        role="presentation"
        loading="lazy"
        alt="An astronaut floating in space around planet Juno orbited by satellites, stars in the background."
      />
    </div>
  );
};
