const AboutHero = () => {
  return (
    <section className="min-h-screen bg-white px-6 md:px-12 lg:px-24 py-20 flex items-center">
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute inset-0 translate-y-4 -translate-x-4 scale-110 rounded-[40%] bg-neutral-200 -z-10" />

            {/* Your Image */}
            <img
              src="/images/profile.png"
              alt="Andrej"
              className="w-[280px] md:w-[340px] object-contain"
            />
          </div>

          <div className="flex items-center gap-5 mt-8 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-60 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:opacity-60 transition"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <span className="uppercase tracking-[0.25em] text-sm text-neutral-500">
            About Me
          </span>

          <h1 className="text-5xl md:text-6xl font-medium mt-4">
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

          <div className="mt-10 space-y-2 text-sm md:text-base">
            <p>
              <span className="font-semibold">Frontend:</span> React · Next.js ·
              Tailwind CSS
            </p>

            <p>
              <span className="font-semibold">Tools:</span> Git · GitHub · VS
              Code · AI Tools
            </p>

            <p>
              <span className="font-semibold">Technical:</span> CNC · CAD/CAM ·
              Automation · Mechatronics
            </p>
          </div>

          <div className="flex gap-12 mt-12">
            <div>
              <h2 className="text-4xl font-semibold">10+</h2>
              <p className="text-neutral-500 text-sm mt-1">Personal Projects</p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold">AI</h2>
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
