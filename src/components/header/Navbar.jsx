const Navbar = ({ toggle }) => {
  return (
    <nav
      style={{
        clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <a href="#home">Home</a>
      <a href="#book">Book</a>
      <a href="#packages">Packages</a>
      <a href="#services">Services</a>
      <a href="#gallery">Gallery</a>
      <a href="#review">Review</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
