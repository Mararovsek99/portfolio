import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <footer
      ref={footerRef}
      className="relative h-screen bg-[#1c1d20] px-8 py-16 text-white overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto pt-10 md:pt-40">
        <div className="flex items-start gap-8">
          <img
            src="/favicon/web-app-manifest-512x512.png"
            alt="Andrej"
            className="w-20 h-20 rounded-full object-cover mt-2"
          />

          <h2 className="text-[clamp(3rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em]">
            Developer <br />
            Available for work
          </h2>
        </div>

        <div className="relative mt-28 h-px bg-white/15">
          <motion.a
            href="mailto:andrej.marovsek99@gmail.com"
            style={{ x }}
            className="absolute left-[calc(50%-70px)] top-1/2 -translate-y-1/2 flex h-28 w-28 items-center justify-center rounded-full bg-[#4c5cf0] text-sm text-white sm:left-[calc(50%-80px)] sm:h-32 sm:w-32 md:right-[15%] md:left-auto md:h-44 md:w-44"
          >
            Get in touch
          </motion.a>
        </div>

        <div className="mt-24 mb-46 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:andrej.marovsek99@gmail.com"
            className="rounded-full border border-white/20 px-8 py-5 text-center"
          >
            andrej.marovsek99@gmail.com
          </a>

          <a
            href="tel:+38651218722"
            className="mb-4 rounded-full border border-white/20 px-8 py-5 text-center sm:mb-0"
          >
            +386 51 218 722
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex flex-col items-start gap-10 md:items-center lg:flex-row lg:items-center lg:gap-20">
        {/* Desktop only */}
        <div className="hidden lg:block">
          <p className="mb-4 text-xs text-white/40">VERSION</p>
          <p>2026 © Edition</p>
        </div>

        {/* Desktop only */}
        <div className="hidden lg:block">
          <p className="mb-4 text-xs text-white/40">LOCAL TIME</p>
          <p>Slovenia GMT+2</p>
        </div>

        {/* Credits */}
        <div className="order-2 text-left md:text-center lg:order-none lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <p className="mb-4 text-xs text-white/40">CREDITS</p>

          <div className="flex flex-wrap gap-2 text-sm md:justify-center">
            <span className="text-white/40">Inspired by</span>

            <a
              href="https://www.linkedin.com/in/dennissnellenberg/"
              target="_blank"
              className="transition-colors hover:text-white"
            >
              Dennis Snellenberg
            </a>
            <div className="basis-full md:hidden" />

            <span className="hidden text-white/40 lg:block">-</span>

            <span className="text-white/40">Built by</span>
            <span>Andrej Marovšek</span>
          </div>
        </div>

        {/* Socials */}
        <div className="order-1 flex flex-col items-start md:items-center lg:order-none lg:ml-auto lg:items-center">
          <p className="mb-4 text-xs text-white/40">SOCIALS</p>

          <div className="flex gap-8">
            <a href="https://github.com/Mararovsek99">GitHub</a>

            <a href="https://www.linkedin.com/in/andrej-marov%C5%A1ek-78b040206/">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
