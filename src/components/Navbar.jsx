import { Link, useLocation } from "react-router-dom";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const location = useLocation();
  const isLightPage = ["/about", "/contact"].includes(location.pathname);

  const textClass = isLightPage ? "text-black" : "text-white";
  const accentClass = isLightPage ? "bg-black" : "bg-white";

  const buttons = [
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`absolute left-0 top-0 z-[1000] hidden md:flex w-full justify-between p-8 ${textClass}`}
    >
      <Magnetic>
        <Link
          to="/"
          className={`group inline-flex cursor-pointer items-center gap-1 p-2 text-lg ${textClass}`}
        >
          <span className="inline-block transition-transform duration-700 ease-out group-hover:-rotate-[360deg]">
            ©
          </span>

          <span className="overflow-hidden">
            <span className="inline-block origin-left transition-all duration-500 group-hover:-translate-x-17">
              Code by
            </span>
          </span>

          <span className="inline-block w-[56px] overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:-translate-x-17 group-hover:w-[150px]">
            Andrej Marovšek
          </span>
        </Link>
      </Magnetic>

      <div className="flex items-center gap-4">
        {buttons.map((button) => (
          <Magnetic key={button.name}>
            <Link
              to={button.to}
              className="group flex flex-col items-center justify-center"
            >
              <span className={`rounded-lg p-2 text-xl ${textClass}`}>
                {button.name}
              </span>

              <span
                className={`inline-block h-2 w-2 scale-0 rounded-full ${accentClass} transition group-hover:scale-100`}
              />
            </Link>
          </Magnetic>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
