import { useState } from "react";
import "./intro.scss";

const Intro = () => {
  const [src, setSrc] = useState("images/vid-1.mp4");
  const vidSources = [
    "images/vid-1.mp4",
    "images/vid-2.mp4",
    "images/vid-3.mp4",
    "images/vid-4.mp4",
    "images/vid-5.mp4",
  ];
  return (
    <section className="intro" id="home">
      <div className="video-container">
        <video autoPlay loop muted src={src}></video>
      </div>
      <div className="intro-content">
        <div className="content">
          <h1>ADVENTURE IS WORTHWHILE</h1>
          <h6>Discover New Places With Us, Adventure Awaits</h6>
          <button className="btn">Discover More</button>
        </div>
        <div className="controls">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              onClick={() => setSrc(vidSources[item - 1])}
              key={item}
              className="vid-btn"
              style={{
                backgroundColor:
                  src === vidSources[item - 1] && "var(--orange-color)",
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
