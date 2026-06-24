import GlobeIcon from "./GlobeIcon";
import { GoArrowDownRight } from "react-icons/go";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="bg-[#999d9e] h-screen text-white text-md overflow-hidden relative">
        <img
          src="/hero_andrej.webp"
          alt="author of the page"
          className="h-screen absolute left-1/2 top-0"
          style={{
            transform: `translateX(-50%) translateY(${scrollY * 0.2}px)`,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <section className="pointer-events-none absolute top-2/3 h-1/3 w-screen overflow-hidden flex items-start md:top-0 md:h-screen md:items-end">
          <div className="marquee">
            <div className="marquee-track">
              <h1>Andrej Marovšek -</h1>
              <h1>Andrej Marovšek -</h1>
            </div>
          </div>
        </section>

        <div className="hidden md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:bg-black/80 md:rounded-r-full md:flex md:justify-center md:items-center md:gap-4">
          <div className="flex flex-col m-5 ml-10">
            <span className="text-xl">Located</span>
            <span className="text-xl">in the</span>
            <span className="text-xl">Slovenia</span>
          </div>
          <div className="relative rounded-full h-20 w-20 m-5">
            <GlobeIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="absolute right-4 bottom-4 md:hidden rounded-full h-20 w-20 flex items-center justify-center shadow-xl shadow-black/30">
          <GlobeIcon className="h-10 w-10" />
        </div>
        <div className="absolute right-0 top-1/2  md:-translate-y-25  lg:-translate-y-40 -translate-y-20 -translate-x-10 md:-translate-x-..host0 flex flex-col md:gap-5 lg:gap-10">
          <div>
            <GoArrowDownRight className="h-10 w-10 mb-2" />
          </div>
          <div className="flex flex-col m-2 md:mr-10 lg:mr-20 gap-2">
            <span className="md:text-4xl lg:text-5xl">Web Developer</span>
            <span className="lg:text-4xl">with Engineering Expertise</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
