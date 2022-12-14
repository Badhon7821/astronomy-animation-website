import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Missions from "./Missions";
import Gallery from "./Gallery";
import { useSmoothScroll } from "./hook/useSmoothScrool";

function App() {
  useSmoothScroll();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
