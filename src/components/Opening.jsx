import React, { useEffect, useState } from "react";
import "./Opening.css";

const greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao"];

const Opening = () => {
  const [index, setIndex] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, []);

  useEffect(() => {
    if (hide) {
      const timer = setTimeout(() => {
        const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";

        window.scrollTo(0, scrollY);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [hide]);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 300);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setHide(true), 300);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className={`opening-section ${hide ? "opening-hide" : ""}`}>
      <span className={`opening-text ${hide ? "text-hide" : ""}`}>
        {greetings[index]}
      </span>
    </section>
  );
};

export default Opening;
