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
      className="relative min-h-screen bg-[#1c1d20] px-8 py-16 text-white overflow-hidden"
    >
      <div className="max-w-[1350px] mx-auto pt-28">
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
            className="absolute right-[15%] top-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-[#4c5cf0] flex items-center justify-center text-white text-sm"
          >
            Get in touch
          </motion.a>
        </div>

        <div className="mt-24 flex gap-4 flex-wrap">
          <a
            href="mailto:andrej.marovsek99@gmail.com"
            className="border border-white/20 rounded-full px-8 py-5"
          >
            andrej.marovsek99@gmail.com
          </a>

          <a
            href="tel:+38651218722"
            className="border border-white/20 rounded-full px-8 py-5"
          >
            +386 51 218 722
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex items-end gap-20">
        <div>
          <p className="text-xs text-white/40 mb-4">VERSION</p>
          <p>2026 © Edition</p>
        </div>

        <div>
          <p className="text-xs text-white/40 mb-4">LOCAL TIME</p>
          <p>Slovenia GMT+2</p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs text-white/40 mb-4">CREDITS</p>

          <div className="flex gap-2 text-sm">
            <span className="text-white/40">Inspired by</span>

            <a
              href="https://www.linkedin.com/in/dennissnellenberg/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              Dennis Snellenberg
            </a>

            <span className="text-white/40">-</span>

            <span>Built by Andrej Marovšek</span>
          </div>
        </div>

        <div className="ml-auto">
          <p className="text-xs text-white/40 mb-4">SOCIALS</p>
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
