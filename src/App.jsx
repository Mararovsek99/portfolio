import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import { defineElement } from "@lordicon/element";
defineElement();
const App = () => {
  return (
    <>
      {Hero()}
      {Intro()}
      {Footer()}
    </>
  );
};

export default App;
