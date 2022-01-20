import Book from "./components/book/Book";
import Brand from "./components/brand/Brand";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Packages from "./components/packages/Packages";
import Review from "./components/review/Review";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Book />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <Brand />
      <Footer />
    </div>
  );
};

export default App;
