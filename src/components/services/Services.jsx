import "./services.scss";
import Heading from "../heading/Heading";
import { servicesData } from "../../dummyData";

const Services = () => {
  return (
    <section id="services" className="services">
      <Heading title="services" />
      <div className="services-container">
        {servicesData.map((item) => (
          <div key={item.id} className="service-item">
            <div className={item.icon}></div>
            <h3>{item.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              debitis modi. Sit natus debitis aspernatur ducimus rem porro
              dignissimos sapiente molestiae explicabo nisi.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
