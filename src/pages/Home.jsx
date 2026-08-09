import Opening from "../components/Opening";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import RecentWork from "../components/RecentWork";

const Home = ({ onOpeningComplete }) => {
  return (
    <>
      <Opening onFinished={onOpeningComplete} />
      <Hero />
      <Intro />
      <RecentWork />
    </>
  );
};

export default Home;
