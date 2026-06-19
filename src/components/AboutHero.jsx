const AboutHero = () => {
  return (
    <section className="relative min-h-screen px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/about_hero_andrej.webp')" }}
      />
      <div className="absolute inset-0 " />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="hidden lg:block" />

        <div className="bg-white/95 backdrop-blur-xl rounded-[36px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] p-10 md:p-14">
          <span className="uppercase tracking-[0.25em] text-sm text-neutral-500">
            About Me
          </span>

          <h1 className="text-5xl md:text-6xl font-medium mt-4 text-black">
            Hi, I'm Andrej
          </h1>

          <p className="mt-4 text-lg text-neutral-600 max-w-xl">
            Frontend Developer focused on React, Next.js and modern web
            interfaces.
          </p>

          <div className="mt-8 space-y-5 text-neutral-700 leading-relaxed max-w-xl">
            <p>
              I currently work in mechatronics, designing and constructing
              cutting tools for the metal and wood industry while learning web
              development and building real-world projects.
            </p>

            <p>
              My background includes CNC programming, CAD/CAM, automation and
              engineering problem solving, which helps me approach software
              development with a practical mindset.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-10 md:flex-row md:gap-12">
            <div>
              <h2 className="text-4xl font-semibold text-black">10+</h2>
              <p className="text-neutral-500 text-sm mt-1">Personal Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-black">AI</h2>
              <p className="text-neutral-500 text-sm mt-1">
                Assisted Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
