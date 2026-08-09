import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  const [openingComplete, setOpeningComplete] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setOpeningComplete(false);
    } else {
      setOpeningComplete(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar hidden={!openingComplete && location.pathname === "/"} />
      <Menu openingComplete={openingComplete} />

      <Routes>
        <Route
          path="/"
          element={<Home onOpeningComplete={() => setOpeningComplete(true)} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
