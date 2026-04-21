// import { motion } from "motion/react";
import navbar from "./navbar";
const hero = () => {
  return (
    <>
      <section className="bg-[#999D9E] h-screen text-white text-md p-8">
        {/* nav bar */}
        {navbar()}
      </section>
    </>
  );
};

export default hero;
