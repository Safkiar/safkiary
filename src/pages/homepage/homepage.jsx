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
      "html",
      "css",
      "scss",
      "javascript",
      "python",
      "django",
      "java",
      "sql",
      "spring",
      "node",
      "react",
      "angular",
      "pug",
      "webpack",
      "typescript",
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
          if (texts.includes(text))   {
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
              {hoveredTag === "pug" && (
            <div className="hover-indicator showMe">
              PUG PUG PUG
            </div>
          )}
                 {hoveredTag === "html" && (
            <div className="hover-indicator showMe">
              html body div
            </div>
          )}
                 {hoveredTag === "css" && (
            <div className="hover-indicator showMe">
              class to classname
            </div>
          )}
                  {hoveredTag === "scss" && (
            <div className="hover-indicator showMe">
              im better version of you
            </div>
          )}
                  {hoveredTag === "django" && (
            <div className="hover-indicator showMe">
              initial experience
            </div>
          )}
                  {hoveredTag === "java" && (
            <div className="hover-indicator showMe">
              I`m not javascript!
            </div>
          )}
                  {hoveredTag === "sql" && (
            <div className="hover-indicator showMe">
              booooring
            </div>
          )}
                  {hoveredTag === "spring" && (
            <div className="hover-indicator showMe">
              is coming yeey
            </div>
          )}
                  {hoveredTag === "node" && (
            <div className="hover-indicator showMe">
              I`m a back end
            </div>
          )}
                        {hoveredTag === "react" && (
            <div className="hover-indicator showMe">
              meta haha
            </div>
          )}
                        {hoveredTag === "angular" && (
            <div className="hover-indicator showMe">
              banks loves me
            </div>
          )}
                        {hoveredTag === "webpack" && (
            <div className="hover-indicator showMe">
              what am I
            </div>
          )}
                        {hoveredTag === "typescript" && (
            <div className="hover-indicator showMe">
              I`m better, stronger
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
