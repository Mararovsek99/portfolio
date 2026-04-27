// import { motion } from "motion/react";
import navbar from "./navbar";
const hero = () => {
  return (
    <>
      <section className="bg-[#999d9e] h-screen text-white text-md p-8 overflow-hidden relative">
        {/* nav bar */}
        {navbar()}
        <img
          src="/hero_andrej.png"
          alt="author of the page"
          className="h-screen absolute left-1/2 -translate-x-1/2 top-0"
        />
      </section>
    </>
  );
};

export default hero;
