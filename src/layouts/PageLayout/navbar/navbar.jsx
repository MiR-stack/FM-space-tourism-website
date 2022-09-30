import { useState } from "react";
import { ReactComponent as Logo } from "../../../assets/shared/logo.svg";
import Menu from "../../../components/shared/nav/nav";
import TransBg from "../../../components/shared/transparentBg/transBg";
import data from "../../../data.json";
import { Nav, MenuIcon, Line, Wraper } from "./navbar.styled";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const menu = ["home", ...Object.keys(data)];

  return (
    <Nav>
      <div className="brandName">
        <Logo />
      </div>
      <TransBg handler={handleNav} triger={nav} />
      <Wraper>
        <Line />
        <Menu data={menu} type="navbar" nav={nav} handleNav={handleNav} />
      </Wraper>
      <MenuIcon size={24} onClick={handleNav} />
    </Nav>
  );
}

export default Navbar;
