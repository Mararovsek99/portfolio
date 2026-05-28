import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import RecentWork from "./components/RecentWork";
import Opening from "./components/Opening";
import { defineElement } from "@lordicon/element";
import Menu from "./components/Menu";

defineElement();

const App = () => {
  return (
    <>
      <main>
        <Menu />
        <Opening />
        <Hero />
        <Intro />
        <RecentWork />
        <Footer />
      </main>
    </>
  );
};

export default App;
