import Magnetic from "./Magnetic";
import { useEffect } from "react";

import React, { useState } from "react";
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

  return (
    <section className="bg-[#ffffff] text-black p-10 max-w-[1600px] m-auto mt-30 select-none">
      <h4 className="text-gray-500 uppercase text-sm mb-10 ml-16">
        Recent work
      </h4>
      <div className="h-0.5 w-[98%] bg-gray-300 mb-8 mx-auto rounded"></div>
      <div>
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="flex items-center justify-between py-8 px-2 relative group cursor-pointer"
            onMouseEnter={() => setHovered(idx)}
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
      <div className="h-0.5 w-[98%] bg-gray-300 mb-8 mx-auto rounded"></div>
      <div className="flex justify-center my-24">
        <Magnetic>
          <button className="more-work-btn">
            <span>More work</span>
          </button>
        </Magnetic>
      </div>
    </section>
  );
};

export default RecentWork;
