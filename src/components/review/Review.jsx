import Heading from "../heading/Heading";
import "./review.scss";
import Rating from "../packages/Rating";
import { useState } from "react";
import {reviewData} from "../../dummyData"

const Review = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const slideHandler = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex + 1);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };

  return (
    <section className="review" id="review">
        <Heading title="review" />
      <div className="wrapper">
        <div
          onClick={() => slideHandler("left")}
          style={{ left: "-50px", display: sliderIndex === 0 && "none" }}
          className="arrow left"
        >
          <i className="fas fa-chevron-left"></i>
        </div>

        <div
          style={{ transform: `translateX(${sliderIndex * 370}px)` }}
          className="slider"
        >
          {reviewData.map((item) => (
            <div key={item.id} className="slide">
              <img src={item.img} alt="" />
              <h6>{item.name}</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, unde voluptas exercitationem officiis consequatur
                reiciendis molestias ullam deleniti amet adipisci autem quasi
                beatae, hic nisi commodi delectus qui sunt corrupti.
              </p>
              <div className="rating">
              <Rating rate={item.rating} />
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={() => slideHandler("right")}
          style={{ right: "-50px", display: sliderIndex === -4 && "none" }}
          className="arrow right"
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
};

export default Review;
