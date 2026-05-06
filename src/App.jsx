import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import RecentWork from "./components/RecentWork";
import { defineElement } from "@lordicon/element";
defineElement();
const App = () => {
  return (
    <>
      {Hero()}
      {Intro()}
      {RecentWork()}
      {Footer()}
    </>
  );
};

export default App;
