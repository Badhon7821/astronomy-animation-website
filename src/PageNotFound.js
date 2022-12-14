import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "./img/not-found.png";

const PageNotFound = () => {
  return (
    <section className="wrapper not-found">
      <Link to={"/"} className="btn">
        go to home
      </Link>
      <img src={notFoundImage} alt="" />
    </section>
  );
};

export default PageNotFound;
