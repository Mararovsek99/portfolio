import "./About.css";
import AboutHero from "../components/AboutHero";
import AboutSkills from "../components/AboutSkills";
import AboutBackground from "../components/AboutBackground";
import AboutLearning from "../components/AboutLearning";
import AboutLanguages from "../components/AboutLanguages";

const About = () => {
  return (
    <main className="about-page">
      <div className="about-page__container">
        <AboutHero />
        <AboutSkills />
        <AboutBackground />
        <AboutLearning />
        <AboutLanguages />
      </div>
    </main>
  );
};

export default About;
