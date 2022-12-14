import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import {
  useGsapFooterMenu,
  useGsapFooterRight,
  useGsapFooterTitleAveil,
} from "./hook/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerTitleRef = useRef(null);
  const footerMenuRef = useRef(null);
  const footerRightRef = useRef(null);

  useGsapFooterTitleAveil(footerTitleRef);
  useGsapFooterMenu(footerMenuRef);
  useGsapFooterRight(footerRightRef);

  return (
    <footer ref={footerRef}>
      <div className="footer-wrapper wrapper">
        <div className="footer-logo">
          <div className="logo" ref={footerTitleRef}>
            <h2>GlaxyMission</h2>
          </div>
        </div>
        <div className="footer-menu" ref={footerMenuRef}>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/mission"}>mission</Link>
          </li>
          <li>
            <Link to={"/gallery"}>gallery</Link>
          </li>
          <li>
            <Link to={"/blog"}>blog</Link>
          </li>
        </div>
        <div className="footer-contact" ref={footerRightRef}>
          <form action="">
            <input type="email" name="" id="" placeholder="enter your email" />
            <input type="submit" value="submit" />
          </form>
          <div className="contact-icon">
            <FaFacebookF />
            <FaWhatsapp />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
