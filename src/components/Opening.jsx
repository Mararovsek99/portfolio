import React, { useEffect, useState } from "react";
import "./Opening.css";

const greetings = ["Hello", "Zdravo", "Hola", "Bonjour", "Hallo", "Ciao"];

const Opening = ({ onFinished }) => {
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
        if (onFinished) {
          onFinished();
        }
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [hide, onFinished]);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const isFirst = index === 0;
      const isLastBeforeEnd = index === greetings.length - 2;

      const delay = isFirst || isLastBeforeEnd ? 400 : 300;

      const timer = setTimeout(() => setIndex(index + 1), delay);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setHide(true), 200);
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
