import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import BurgerMenu from "./BurgerMenu";
import "./header.scss";
import Icons from "./Icons";
import LoginForm from "./LoginForm";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  return (
    <Fragment>
    <header>
      <BurgerMenu toggle={toggle} setToggle={setToggle} />
      <Logo />
      <Navbar toggle={toggle} />
      <Icons  setLoginForm={() => setLoginForm(!loginForm)} isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchForm isOpen={isOpen} />
     
    </header>
    <LoginForm loginForm={loginForm} setLoginForm={setLoginForm} />
    </Fragment>
  );
};

export default Header;
