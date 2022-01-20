import "./footer.scss";
import { links } from "../../dummyData";
import { Fragment } from "react/cjs/react.production.min";

const Footer = () => {
  return (
      <Fragment>
    <footer>
      <div className="footer-item">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          quae ipsam corrupti explicabo laborum consequatur iure nobis repellat
          hic, pariatur non consequuntur necessitatibus similique quia quis
          beatae libero! Velit.
        </p>
      </div>
      <div className="footer-item">
        <h3>Quick Links</h3>
        <ul className="links">
          {links.map((item) => (
            <li key={item.id}>
              <i className="fas fa-arrow-right"></i>
              <a href={`#${item.link}`}>{item.link}</a>
            </li>
          ))}
        </ul>
      </div>
      <d className="footer-item">
        <h3>Contact Us</h3>
        <div className="contact">
          <div>
            <i className="fas fa-phone"></i>
            +123 456 7899
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            contact@gmail.com
          </div>
          <div>
            <i className="fas fa-map-marked-alt"></i>
            IRAN Kashan
          </div>
        </div>
        <div className="social-icons">
          <div style={{ background: "#0984e3" }} className="icon">
            <i className="fab fa-facebook-square"></i>
          </div>
          <div style={{ background: "#e74c3c" }} className="icon">
            <i className="fab fa-instagram-square"></i>
          </div>
          <div style={{ background: "#3498db" }} className="icon">
            <i className="fab fa-twitter-square"></i>
          </div>
          <div style={{ background: "#6c5ce7" }} className="icon">
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </d>
    </footer>
    <div className="credit">
        Copyright &copy; 2022
    </div>
    </Fragment>
  );
};

export default Footer;
