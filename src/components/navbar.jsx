import Magnetic from "./magnetic";

const navbar = () => {
  const buttons = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="flex justify-between">
      <Magnetic>
        <div className="group text-white text-lg p-2 inline-flex items-center gap-1 cursor-pointer">
          <span className="inline-block transition-transform duration-700 ease-out group-hover:-rotate-[360deg]">
            ©
          </span>
          <span className="overflow-hidden">
            <span className="inline-block transition-all duration-500 origin-left group-hover:-translate-x-17">
              Code by
            </span>
          </span>
          <span className="inline-block transition-all duration-500 group-hover:-translate-x-17 overflow-hidden w-[56px] group-hover:w-[150px] whitespace-nowrap">
            <span>Andrej</span>
            <span> </span>
            <span>Marovšek</span>
          </span>
        </div>
      </Magnetic>

      {/* // navigation buttons with hover effected dots under them*/}
      <div className="flex items-center gap-4">
        {buttons.map((button) => (
          <Magnetic key={button.name}>
            <div className="group flex flex-col justify-center items-center">
              <button className=" text-white text-xl p-2 rounded-lg ">
                {button.name}
              </button>
              <span className="group-hover:scale-100 scale-0 transition inline-block h-2 w-2 rounded-full bg-white"></span>
            </div>
          </Magnetic>
        ))}
      </div>
    </div>
  );
};

export default navbar;
