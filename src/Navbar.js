import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  useGsapLogoStruger,
  useGsapMenuStagger,
  useGsapRocketLeftToRight,
} from "./hook/gsap";
import rocket from "./img/rockets_PNG.png";

const Navbar = () => {
  const rocketRef = useRef(null);
  const navRef = useRef(null);

  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3, li4];

  useGsapLogoStruger(logoRef, navRef);
  useGsapMenuStagger(liArr, navRef, 0.5);
  useGsapRocketLeftToRight(rocketRef, navRef);

  return (
    <nav className="navbar">
      <div className="nav-wrapper" ref={navRef}>
        <div className="logo" ref={logoRef}>
          <Link to={"/"}>
            <h2>GlaxyMission</h2>
          </Link>
        </div>
        <ul className="links">
          <li ref={li1}>
            <Link to={"/"}>home</Link>
          </li>
          <li ref={li2}>
            <Link to={"/mission"}>mission</Link>
          </li>
          <li ref={li3}>
            <Link to={"/gallery"}>gallery</Link>
          </li>
          <li ref={li4}>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      <img src={rocket} alt="" ref={rocketRef} />
    </nav>
  );
};

export default Navbar;
