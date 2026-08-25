const frontendSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Responsive Design",
];

const workflowSkills = [
  "Git / GitHub",
  "Vercel",
  "VS Code",
  "SEO Basics",
  "UI / UX",
  "Performance",
  "TypeScript — learning",
];

const engineeringSkills = [
  "SolidWorks",
  "SolidCAM",
  "CAD / CAM",
  "CNC Programming",
  "Automation",
  "Technical Design",
  "Problem Solving",
];

const AboutSkills = () => {
  return (
    <section className="bg-[#e9e9e7] text-[#1d1d1f]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32">
        {/* Section heading */}
        <div className="mb-16 md:mb-24">
          <span className="mb-5 block text-xs uppercase tracking-[0.22em] text-black/40">
            Technical skills
          </span>

          <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl tracking-[-0.045em] leading-[1.05] font-medium">
            What I can bring
            <br />
            to a project.
          </h2>
        </div>

        {/* Skills columns */}
        <div className="grid md:grid-cols-3 border-t border-black/15">
          {/* 01 */}
          <article
            className="
            py-10
            md:pr-10
            md:border-r
            border-black/15
          "
          >
            <span className="text-[10px] text-black/35">01</span>

            <div className="mt-5 border-t border-black/15 pt-8">
              <h3 className="text-2xl tracking-[-0.03em]">Frontend</h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-black/55">
                For frontend development, my main tools are VS Code and
                Responsively App. For smooth, responsive web experiences, I like
                to use the Motion library.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                {frontendSkills.map((skill) => (
                  <span key={skill} className="text-sm text-black/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* 02 */}
          <article
            className="
            py-10
            md:px-10
            md:border-r
            border-t md:border-t-0
            border-black/15
          "
          >
            <span className="text-[10px] text-black/35">02</span>

            <div className="mt-5 border-t border-black/15 pt-8">
              <h3 className="text-2xl tracking-[-0.03em]">Currently</h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-black/55">
                I'm continuously improving my skills to become a stronger
                frontend developer. In my free time, I work on real projects
                like{" "}
                <a
                  className="font-bold text-blue-500"
                  href="https://fizioluma.si/"
                >
                  fizioluma.si
                </a>{" "}
                and this portfolio.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                {workflowSkills.map((skill) => (
                  <span key={skill} className="text-sm text-black/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* 03 */}
          <article
            className="
            py-10
            md:pl-10
            border-t md:border-t-0
            border-black/15
          "
          >
            <span className="text-[10px] text-black/35">03</span>

            <div className="mt-5 border-t border-black/15 pt-8">
              <h3 className="text-2xl tracking-[-0.03em]"> Engineering</h3>

              <p className="mt-5 max-w-sm text-sm leading-6 text-black/55">
                My goal is to reach the same level in web development that I
                have in mechatronics engineering. I rarely believe something
                can't be done, but I keep working until I find a way.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                {engineeringSkills.map((skill) => (
                  <span key={skill} className="text-sm text-black/80">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
