import React from "react";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Missions from "./Missions";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Hero />
      <Missions />
      <Gallery />
    </div>
  );
};

export default Home;
