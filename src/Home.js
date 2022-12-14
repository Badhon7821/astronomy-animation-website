import React from "react";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Missions from "./Missions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Missions />
      <Gallery />
      <Blog />
    </div>
  );
};

export default Home;
