import "./brand.scss";
import { brandData } from "../../dummyData";
import { useState } from "react";

const Brand = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <section className="brand">
      <div className="wrapper">
        <div
          style={{ display: slideIndex === 1 && "none" }}
          onClick={() => handleClick("left")}
          className="arrow left"
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        <div
          style={{ transform: `translateX(${360 * slideIndex}px)` }}
          className="brand-slider"
        >
          {brandData.map((item) => (
            <div key={item.id} className="brand-item">
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <div
          style={{ display: slideIndex === -7 && "none" }}
          onClick={() => handleClick("right")}
          className="arrow right"
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Brand;
