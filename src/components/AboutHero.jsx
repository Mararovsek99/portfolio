import GlobeIcon from "./GlobeIcon";

const AboutHero = () => {
  return (
    <section className="bg-[#f7f7f5] text-[#1d1d1f]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="min-h-[85vh] flex flex-col justify-center py-24 md:py-32">
          {/* Small label */}
          <div className="mb-12 md:mb-20">
            <span className="text-xs uppercase tracking-[0.22em] text-black/45">
              About me
            </span>
          </div>

          {/* Main title */}
          <div className="max-w-5xl">
            <h1 className="text-[clamp(3.2rem,8vw,7rem)] leading-[0.92] tracking-[-0.055em] font-medium">
              Developer with
              <br />
              an engineering mind.
            </h1>
          </div>

          {/* Divider */}
          <div className="relative mt-14 md:mt-20">
            <div className="h-px w-full bg-black/15" />

            <div
              className="
              absolute right-[8%] top-1/2
              flex h-20 w-20 -translate-y-1/2
              items-center justify-center rounded-full
              bg-[#4657f5] text-white
              md:h-24 md:w-24
            "
            >
              <GlobeIcon size="2.25rem" />
            </div>
          </div>

          {/* Bottom content */}
          <div
            className="
            mt-16
            grid gap-10
            md:mt-20
            md:grid-cols-[0.55fr_1fr_1fr]
            md:gap-12
          "
          >
            <div className="hidden md:block">
              <span className="text-2xl font-light">↓</span>
            </div>

            <div>
              <p className="text-xl md:text-2xl leading-snug tracking-[-0.025em]">
                Hi, I'm Andrej, frontend developer focused on building clean,
                responsive and modern web experiences.
              </p>
            </div>

            <div className="max-w-md">
              <p className="text-sm md:text-base leading-7 text-black/65">
                I work with React, Next.js, JavaScript and Tailwind CSS,
                creating interfaces that combine clean design with practical
                functionality.
              </p>

              <p className="mt-5 text-sm md:text-base leading-7 text-black/65">
                My background in mechatronics, CNC programming and CAD/CAM gives
                me a different perspective on software development — structured
                thinking, technical problem solving and attention to detail are
                a natural part of the way I work.
              </p>

              <p className="mt-6 text-xs text-black/35">
                Always learning. Always building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
