import Cube from "./cube";
// import Sphere from "./sphere";
import TagCloud from "TagCloud";
import "./homepage.css";
import { useEffect, useState } from "react";
import "./sphere.css";

function Homepage() {
  const [hoveredTag, setHoveredTag] = useState("");
  const [emptyInd, setEmptyInd] = useState(true);

  useEffect(() => {
    if (hoveredTag === "") {
      setEmptyInd(true);
    } else {
      setEmptyInd(false);
    }
  }, [hoveredTag]);

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
      radius: 280,
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
    <div className="homepage_container">
      <div className="sphere_container">
        <div className="text-sphere">
          <span className="tagcloud"></span>
        </div>
      </div>
      {/* <Cube></Cube> */}
      <div className="tvbox">
        <div className="my_img_container">
          <img src="/Ja.jpg" alt="" />
        </div>
        <div className="tvpixel">
          {emptyInd && (
            <div className="intro showMe">
              <div className="me">Michał Kikowski - Software developer</div>
              <div className="who">
                Blending creativity with discipline - I build refined UIs,
                handle data daily, and grow fast across the stack.
              </div>
            </div>
          )}
          {hoveredTag === "python" && (
            <div className="hover-indicator showMe">
              🐍 Hovering over Python!
            </div>
          )}
          {hoveredTag === "javascript" && (
            <div className="hover-indicator showMe">
              ⚡ JavaScript detected!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
