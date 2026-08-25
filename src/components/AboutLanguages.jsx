const AboutLanguages = () => {
  return (
    <section className="bg-[#e9e9e7] text-[#1d1d1f]">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <span className="mb-8 block text-xs uppercase tracking-[0.22em] text-black/40">
          Languages
        </span>

        <div className="border-t border-black/15">
          <div className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-2">
            <h3 className="text-2xl tracking-[-0.03em]">Slovenian</h3>

            <p className="text-sm leading-7 text-black/55 md:text-base">
              Native
            </p>
          </div>

          <div className="grid gap-4 border-b border-black/15 py-8 md:grid-cols-2">
            <h3 className="text-2xl tracking-[-0.03em]">English</h3>

            <p className="text-sm leading-7 text-black/55 md:text-base">
              Strong reading and listening comprehension, working communication
              proficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLanguages;
