import Heading from "../heading/Heading";
import "./book.scss";

const Book = () => {
  return (
    <section className="book" id="book">
      <Heading title="book now" />
      <div className="container">
        <div className="img-wrapper">
          <img src="images/book-img.svg" alt="" />
        </div>
        <div className="form-wrapper">
          <form>
            <div className="input-group">
              <h3>Where To?</h3>
              <input type="text" placeholder="place name" />
            </div>
            <div className="input-group">
              <h3>How Many?</h3>
              <input type="number" min={1} placeholder="number of guests" />
            </div>
            <div className="input-group">
              <h3>Arrivals</h3>
              <input type="date" />
            </div>
            <div className="input-group">
              <h3>Leaving</h3>
              <input type="date" />
            </div>
            <button type="submit" className="btn">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Book;
