import { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import "./sphere.css";

function Sphere() {
  const [hoveredTag, setHoveredTag] = useState("");

  useEffect(() => {
    const containerSelector = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "Python",
      "Django",
      "Java",
      "SQL",
      "Spring",
      "Node",
      "React",
      "Angular",
      "Node",
      "PUG",
      "Webpack",
      "TypeScript",
    ];

    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    const container = document.querySelector(containerSelector);

    if (container) {
      container.innerHTML = "";
      TagCloud(containerSelector, texts, options);

      container.querySelectorAll(".tagcloud--item").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text = el.textContent.toLowerCase();
          if (text === "python" || text === "javascript") {
            setHoveredTag(text);
          }
        });

        el.addEventListener("mouseleave", () => {
          setHoveredTag("");
        });
      });
    }
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>

      {hoveredTag === "python" && (
        <div className="hover-indicator">🐍 Hovering over Python!</div>
      )}
      {hoveredTag === "javascript" && (
        <div className="hover-indicator">⚡ JavaScript detected!</div>
      )}
    </div>
  );
}

export default Sphere;
