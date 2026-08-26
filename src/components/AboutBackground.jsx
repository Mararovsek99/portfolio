const education = [
  {
    period: "2019 — 2022",
    title: "Mechatronics Engineer",
    place: "School Centre Celje",
    text: "Focused on automation, robotics, sensors, system development and solving complex technical problems.",
  },
  {
    period: "2017 — 2019",
    title: "Mechatronics Technician",
    place: "School Centre Celje",
    text: "Built a foundation in programming, CAD/CAM, robotics and automated systems.",
  },
  {
    period: "2014 — 2017",
    title: "Electrician",
    place: "School Centre Celje",
    text: "Learned about electrical systems, circuits, components and how to design electrical devices.",
  },
];

const AboutBackground = () => {
  return (
    <section className="bg-[#f7f7f5] text-[#1d1d1f]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          {/* Heading */}
          <div>
            <span className="mb-5 block text-xs uppercase tracking-[0.22em] text-black/40">
              EDUCATION
            </span>

            <h2 className="max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Engineering shaped
              <br />
              how I think.
            </h2>
          </div>

          {/* Education */}
          <div className="border-t border-black/15">
            {education.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-6 border-b border-black/15 py-10 md:grid-cols-[0.35fr_1fr]"
              >
                <div>
                  <span className="text-xs text-black/40">{item.period}</span>
                </div>

                <div>
                  <h3 className="text-2xl tracking-[-0.03em]">{item.title}</h3>

                  <p className="mt-2 text-sm text-black/45">{item.place}</p>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-black/60 md:text-base">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBackground;
