import Magnetic from "./Magnetic";
import React, { useEffect, useState } from "react";
import { portfolioImages } from "../assets/portfolioImages";
import "./RecentWork.css";
import "./MoreWorkBtn.css";

const projects = [
  {
    title: "Fizio LuMa",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Vercel",
    ],
    image: portfolioImages[0],
    url: "https://fizioluma.si",
  },
  {
    title: "YT to MP3",
    technologies: ["Python", "Tkinter", "yt-dlp", "FFmpeg", "PyInstaller"],
    image: portfolioImages[5],
    url: "https://github.com/Mararovsek99/yt-to-mp3-windows-app",
  },

  {
    title: "CV Maker",
    technologies: ["React", "JavaScript", "TailwindCSS", "Vite", "Netlify"],
    image: portfolioImages[1],
    url: "https://cvmaker-app.netlify.app/",
  },

  {
    title: "Battleship",
    technologies: ["JavaScript", "HTML", "CSS", "Webpack", "Jest"],
    image: portfolioImages[2],
    url: "https://mararovsek99.github.io/battleship/",
  },

  {
    title: "Etch-A-Sketch",
    technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    image: portfolioImages[3],
    url: "https://mararovsek99.github.io/etch-a-sketch/",
  },

  {
    title: "Tic Tac Toe",
    technologies: ["JavaScript", "HTML", "CSS", "Module Pattern"],
    image: portfolioImages[4],
    url: "https://mararovsek99.github.io/tic-tac-toe/",
  },
];

const RecentWork = () => {
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
  const [viewMouse, setViewMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      projects.forEach((project) => {
        const img = new Image();
        img.src = project.image;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setSmoothMouse((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.1,
        y: prev.y + (mouse.y - prev.y) * 0.1,
      }));

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [mouse]);
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setViewMouse((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.18,
        y: prev.y + (mouse.y - prev.y) * 0.18,
      }));

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [mouse]);
  const handleMouseMove = (e) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const handleMouseEnter = (e, idx) => {
    const position = {
      x: e.clientX,
      y: e.clientY,
    };

    setHovered(idx);
    setMouse(position);
    setSmoothMouse(position);
    setViewMouse(position);
  };

  return (
    <section className="bg-[#ffffff] text-black px-4 md:px-10 py-10 max-w-[1600px] m-auto mt-45 select-none">
      <h4 className="text-gray-500 uppercase text-sm mb-10 ml-16 hidden md:block">
        Recent work
      </h4>
      <div className="h-0.5 w-[98%] bg-gray-300 mb-8 mx-auto rounded hidden md:block"></div>
      <div className="lg:hidden grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group cursor-pointer overflow-hidden bg-white transition-all duration-300"
            onClick={() => window.open(project.url, "_blank")}
          >
            <div className="flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-[#f4f4f4] to-[#dfdfdf] p-4 md:p-6">
              <img
                src={project.image}
                alt={project.title}
                className="h-[88%] w-[88%] object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-3xl font-semibold text-black">
                {project.title}
              </h3>
              <div className="mb-3 h-px w-full bg-gray-300" />
              <div className="text-sm font-medium text-gray-700">
                {project.technologies.join("  |  ")}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="flex items-center justify-between py-8 px-2 relative group cursor-pointer"
            onMouseEnter={(e) => handleMouseEnter(e, idx)}
            onMouseLeave={() => setHovered(null)}
            onMouseMove={handleMouseMove}
            onClick={() => window.open(project.url, "_blank")}
          >
            <div
              className={`text-8xl text-left w-1/2 ml-20 m-8 project-title${hovered === idx ? " hovered" : ""}`}
            >
              {project.title}
            </div>
            <div
              className={`flex gap-2 w-1/2 justify-end flex-wrap tech-mr${hovered === idx ? " hovered" : ""}`}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`tech-badge bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-300${hovered === idx ? " hovered" : ""}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Hover image preview */}
            {hovered === idx && (
              <div
                className="fixed z-50 pointer-events-none"
                style={{
                  left: smoothMouse.x - 200,
                  top: smoothMouse.y - 200,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  borderRadius: "12px",
                  background: "#adadad",
                  border: "1px solid #e5e7eb",
                  width: "400px",
                  height: "400px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: viewMouse.x - smoothMouse.x + 200 - 45,
                    top: viewMouse.y - smoothMouse.y + 200 - 45,
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    background: "#4c5cf0",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  View
                </div>
              </div>
            )}
            {/* Border below each project except last */}
            {idx !== projects.length - 1 && (
              <span className="absolute left-0 bottom-0 w-full h-px bg-gray-300"></span>
            )}
          </div>
        ))}
      </div>
      <div className="h-0.5 w-[98%] bg-gray-300 mb-8 mx-auto rounded hidden md:block"></div>
      <div className="flex justify-center my-24">
        <Magnetic>
          <a
            href="https://github.com/Mararovsek99"
            target="_blank"
            rel="noreferrer"
            className="more-work-btn inline-flex"
          >
            <span>More work</span>
          </a>
        </Magnetic>
      </div>
    </section>
  );
};

export default RecentWork;
