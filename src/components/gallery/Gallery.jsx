import { galleryData } from "../../dummyData";
import "./gallery.scss";
import Heading from "../heading/Heading";

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <Heading title="gallery" />
      <div className="container">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-item">
              <img src={item.img} alt="" />
              <div className="content">
                  <h4 className="title">{item.title}</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing. lorem ipsum.</p>
                  <div className="btn">See More</div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
