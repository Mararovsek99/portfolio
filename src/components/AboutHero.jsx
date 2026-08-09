const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-[#f8fafc] px-6 md:px-12 lg:px-24 py-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div className="space-y-8">
          <span className="uppercase tracking-[0.28em] text-sm text-slate-500">
            About Me
          </span>

          <h1 className="text-5xl md:text-6xl font-semibold text-slate-950">
            Hi, I'm Andrej
          </h1>

          <p className="mt-4 text-xl text-slate-600 max-w-2xl">
            Frontend Developer focused on React, Next.js and modern web
            interfaces.
          </p>

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600 max-w-2xl">
            <p>
              I currently work in mechatronics, designing and constructing cutting
              tools for the metal and wood industry while learning web development
              and building real-world projects.
            </p>

            <p>
              My background includes CNC programming, CAD/CAM, automation and
              engineering problem solving, which helps me approach software
              development with a practical and results-driven mindset.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <span className="uppercase tracking-[0.28em] text-xs text-slate-500">
              Experience
            </span>
            <h2 className="mt-5 text-4xl font-semibold text-slate-950">10+</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Years of engineering and web development experience across design,
              tooling, and frontend applications.
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <span className="uppercase tracking-[0.28em] text-xs text-slate-500">
              Approach
            </span>
            <h2 className="mt-5 text-4xl font-semibold text-slate-950">
              Practical & Minimal
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I build clean, fast interfaces with a strong focus on usability,
              performance, and thoughtful engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
