import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Missions from "./Missions";
import Gallery from "./Gallery";
import { useSmoothScroll } from "./hook/useSmoothScrool";
import Blog from "./Blog";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

function App() {
  useSmoothScroll();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Missions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
