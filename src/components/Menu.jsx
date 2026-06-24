import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 120);
      setMobileScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div
        className={`
          fixed right-6 top-6 z-[9999]
          transition-all duration-300
          ${
            showButton
              ? "md:opacity-100 md:scale-100"
              : "md:opacity-0 md:scale-75"
          }
        `}
      >
        <Magnetic>
          <button
            onClick={() => setOpen(!open)}
            className={`
              flex h-16 w-16 items-center justify-center
              rounded-full text-white
              md:h-20 md:w-20
              transition-all duration-300 ease-out
              ${mobileScrolled ? "bg-[#1c1d20]" : "bg-transparent md:bg-[#1c1d20]"}
              hover:scale-110 active:scale-95
            `}
          >
            <div className="flex flex-col gap-2">
              <span
                className={`h-px w-6 bg-white transition-all duration-300 ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-6 bg-white transition-all duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </Magnetic>
      </div>

      <div
        className={`
          fixed right-0 top-0 z-[9998]
          h-screen w-full bg-[#1c1d20] text-white
          transition-all duration-700
          ease-[cubic-bezier(0.77,0,0.18,1)]
          md:w-[480px]

          ${
            open
              ? "translate-x-0 rounded-l-none"
              : "translate-x-full rounded-l-[100%]"
          }
        `}
      >
        <div className="flex h-full flex-col justify-between px-12 py-32">
          <div>
            <p className="mb-6 text-xs tracking-wide text-white/40">
              NAVIGATION
            </p>

            <div className="mb-10 h-px w-full bg-white/10" />

            <nav className="flex flex-col gap-5 text-4xl tracking-[-0.04em]">
              {links.map((link, index) => (
                <div key={link.name} className="w-fit">
                  <Magnetic>
                    <a
                      onClick={() => setOpen(false)}
                      href={link.href}
                      className="flex items-center gap-4"
                    >
                      {index === 0 && <span className="text-2xl">•</span>}
                      {link.name}
                    </a>
                  </Magnetic>
                </div>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-6 text-xs tracking-wide text-white/40">SOCIALS</p>

            <div className="flex gap-6 text-sm text-white/80">
              <a href="https://github.com/Mararovsek99">GitHub</a>

              <a href="https://www.linkedin.com/in/andrej-marov%C5%A1ek-78b040206/">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
