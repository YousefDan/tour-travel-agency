const BurgerMenu = ({ toggle, setToggle }) => {
  return (
    <div onClick={() => setToggle(!toggle)} className="burger-menu">
      <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
    </div>
  );
};

export default BurgerMenu;
