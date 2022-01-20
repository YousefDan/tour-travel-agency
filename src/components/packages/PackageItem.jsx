import "./package-item.scss";
import Rating from "./Rating";

const PackageItem = ({ item: { img, name, rating } }) => {
  return (
    <div className="package-item">
      <img src={img} alt={name} />
      <div className="content">
        <h5 className="destination">
          <i className="fas fa-map-marker-alt"></i>
          {name}
        </h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nobis?
        </p>
        <Rating rate={rating} />
        <div className="price">
          $90.00 <span>$120.00</span>
        </div>
        <div style={{ width: "max-content" }} className="btn">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
