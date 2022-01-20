import { packagesData } from "../../dummyData";
import Heading from "../heading/Heading";
import PackageItem from "./PackageItem";
import "./packages.scss";

const Packages = () => {
  return (
    <section className="packages" id="packages">
      <Heading title="packages" />
      <div className="container">
        {packagesData.map((item) => (
            <PackageItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
