import "./About.css";
import AboutHero from "../components/AboutHero";
import AboutSkills from "../components/AboutSkills";

const About = () => {
  return (
    <main className="about-page">
      <div className="about-page__container">
        <AboutHero />
        <AboutSkills />
      </div>
    </main>
  );
};

export default About;
