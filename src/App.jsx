import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import RecentWork from "./components/RecentWork";
import Opening from "./components/Opening";
import { defineElement } from "@lordicon/element";

defineElement();

const App = () => {
  return (
    <>
      <main>
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
