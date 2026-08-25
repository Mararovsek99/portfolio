const learned = [
  {
    number: "01",
    title: "Build from scratch",
    text: "Turning an idea or design into a responsive interface using reusable React components and a clear project structure.",
  },
  {
    number: "02",
    title: "Think in components",
    text: "Breaking interfaces into reusable pieces instead of building pages as one large block of code.",
  },
  {
    number: "03",
    title: "Ship projects",
    text: "Working with Git, GitHub and Vercel to move projects from local development to a live production environment.",
  },
  {
    number: "04",
    title: "Learn independently",
    text: "Using documentation, experimentation and real projects to understand new technologies instead of relying only on tutorials.",
  },
];

const AboutLearning = () => {
  return (
    <section className="bg-[#f7f7f5] text-[#1d1d1f]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16">
        <div className="mb-16 md:mb-24">
          <span className="mb-5 block text-xs uppercase tracking-[0.22em] text-black/40">
            Learning by building
          </span>

          <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl lg:text-6xl">
            What building real projects
            <br />
            has taught me.
          </h2>
        </div>

        <div className="border-t border-black/15">
          {learned.map((item) => (
            <article
              key={item.number}
              className="grid gap-5 border-b border-black/15 py-9 md:grid-cols-[0.15fr_0.45fr_1fr] md:gap-10"
            >
              <span className="text-[10px] text-black/35">{item.number}</span>

              <h3 className="text-xl tracking-[-0.025em] md:text-2xl">
                {item.title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-black/55 md:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLearning;
