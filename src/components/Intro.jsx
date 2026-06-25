import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const Intro = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative bg-[#ffffff] text-black text-3xl p-10  flex flex-row gap-10 max-w-[1400px] m-auto mt-30">
      <div className="text-5xl p-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold"
        >
          Hi, I’m Andrej.
        </motion.p>{" "}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Frontend Developer with real engineering experience in CAD/CAM and 3D
          modeling of cutting tools and mechanical parts.
        </motion.p>
      </div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg mt-24"
      >
        Whether it’s a frontend app, a YT to MP3 tool, or a mechanical project,
        I enjoy building things that work well, feel fast, and look clean.
      </motion.h3>

      <div
        className="pointer-events-auto absolute right-10 bottom-6 z-10 md:right-[108px] md:bottom-[20px]"
        style={{
          transform: `translateY(${scrollY * (isDesktop ? 0.08 : 0.04)}px)`,
        }}
      >
        <Magnetic>
          <div className="relative inline-flex items-center justify-center group">
            <div className="absolute -bottom-6 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 opacity-0 blur-3xl transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-4 group-hover:scale-105" />
            <Link
              to="/about"
              className="relative flex h-40 w-40 items-center justify-center rounded-full bg-black text-white shadow-xl shadow-black/30 transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span className="text-sm uppercase tracking-[0.4em]">About</span>
            </Link>
          </div>
        </Magnetic>
      </div>
    </section>
  );
};

export default Intro;
