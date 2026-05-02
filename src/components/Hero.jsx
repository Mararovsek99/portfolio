import Navbar from "./Navbar";
import GlobeIcon from "./GlobeIcon";
import { GoArrowDownRight } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <section className="bg-[#999d9e] h-screen text-white text-md p-8 overflow-hidden relative">
        {/* nav bar */}
        {Navbar()}
        <img
          src="/hero_andrej.png"
          alt="author of the page"
          className="h-screen absolute left-1/2 -translate-x-1/2 top-0"
        />
        <div className="absolute left-0 top-1/2  -translate-y-1/2 bg-black/80 rounded-r-full flex justify-center items-center gap-4">
          <div className="flex flex-col m-5 ml-10">
            <span className="text-xl">Located</span>
            <span className="text-xl">in the</span>
            <span className="text-xl">Slovenia</span>
          </div>
          <div className=" bg-[#999d9e] rounded-full h-20 w-20 m-5">
            <GlobeIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="absolute right-0 top-1/2   -translate-y-40  flex flex-col gap-10">
          <div>
            <GoArrowDownRight className="h-10 w-10 mb-2" />
          </div>
          <div className="flex flex-col m-2 mr-20 gap-2">
            <span className="text-5xl">Web Developer</span>
            <span className="text-4xl">with Engineering Expertise</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
