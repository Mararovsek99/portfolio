const iconSkills = [
  {
    label: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    label: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    label: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
];

const AboutSkills = () => {
  return (
    <section className="about-skills">
      <div className="skills-headline">
        <span className="skills-headline__label">TECHNICAL SKILLS</span>
        <span className="skills-headline__line" />
      </div>

      <div className="skills-grid">
        {iconSkills.map((skill) => (
          <div key={skill.label} className="skill-card">
            <div className="skill-card__icon">
              <img src={skill.icon} alt={skill.label} loading="lazy" />
            </div>
            <div className="skill-card__name">{skill.label}</div>
          </div>
        ))}
      </div>

      <div className="skill-lists">
        <article>
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Responsive Design</li>
          </ul>
        </article>
        <article>
          <h3>Tools & Workflow</h3>
          <ul>
            <li>Git / GitHub</li>
            <li>Vercel</li>
            <li>VS Code</li>
            <li>SEO Basics</li>
            <li>UI/UX Basics</li>
            <li>Currently learning TypeScript & GraphQL</li>
          </ul>
        </article>
        <article>
          <h3>Additional Technical Skills</h3>
          <ul>
            <li>SolidWorks</li>
            <li>SolidCAM</li>
            <li>CNC Programming</li>
            <li>Automation Systems</li>
            <li>CAD/CAM Workflows</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default AboutSkills;
