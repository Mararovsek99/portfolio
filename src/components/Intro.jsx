import { motion } from "motion/react";

const Intro = () => {
  return (
    <section className="bg-[#ffffff] text-black text-3xl p-10  flex flex-row gap-10 max-w-[1400px] m-auto mt-30">
      <h2 className="text-5xl p-10">
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
      </h2>
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
    </section>
  );
};

export default Intro;
