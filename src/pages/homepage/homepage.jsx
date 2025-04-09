import Cube from "../contact/hexagon";
// import Sphere from "./sphere";
import TagCloud from "TagCloud";
import "./homepage.css";
import { useEffect, useState } from "react";
import "./sphere.css";
import { useTranslate } from "../../translation/TranslationContext";

function Homepage() {
  const [hoveredTag, setHoveredTag] = useState("");
  const [emptyInd, setEmptyInd] = useState(true);
  const {t} = useTranslate();

  useEffect(() => {
    setEmptyInd(hoveredTag === "");
  }, [hoveredTag]);

  useEffect(() => {
    const containerSelector = ".tagcloud";
    const texts = [
      "css",
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

    const getRadius = () => {
      const width = window.innerWidth;
      if (width < 340) return 115;
      if (width < 410) return 135;
      if (width < 700) return 175;
      if (width < 1000) return 190;
      if (width < 1350) return 210;
      return 280;
    };

    const renderTagCloud = () => {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      container.innerHTML = "";

      TagCloud(containerSelector, texts, {
        radius: getRadius(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      });

      // Dodaj event listenery do nowo utworzonych elementów
      container.querySelectorAll(".tagcloud--item").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const text = el.textContent.toLowerCase();
          if (texts.includes(text)) {
            setHoveredTag(text);
          }
        });

        el.addEventListener("mouseleave", () => {
          setHoveredTag("");
        });
      });
    };

    // Inicjalne renderowanie
    renderTagCloud();

    // Obsługa resize
    const handleResize = () => {
      renderTagCloud();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="homepage_container">
      <div className="sphere_container">
        <div className="text-sphere">
          <span className="tagcloud"></span>
        </div>
      </div>

      {/* {t("welcome")} */}

      <div className="tvbox">
        <div className="halving_card_title">
          <h3>Michał Kikowski </h3>
          <h3>Software developer </h3>
        </div>
        <div className="halving_card">
          <div className="my_img_container">
            {emptyInd && <img className="showMe" src="/Ja.jpg" alt="" />}
            {hoveredTag === "java" && (
              <img className="avatar showMe" src="./homepage/java.png" />
            )}
            {hoveredTag === "spring" && (
              <img className="avatar showMe" src="./homepage/spring.png" />
            )}
            {hoveredTag === "angular" && (
              <img className="avatar showMe" src="./homepage/Angular.png" />
            )}
            {hoveredTag === "css" && (
              <img className="avatar showMe" src="./homepage/css.png" />
            )}
            {hoveredTag === "django" && (
              <img className="avatar showMe" src="./homepage/dj.png" />
            )}
            {hoveredTag === "javascript" && (
              <img className="avatar showMe" src="./homepage/js.png" />
            )}
            {hoveredTag === "node" && (
              <img className="avatar showMe" src="./homepage/node.png" />
            )}
            {hoveredTag === "pug" && (
              <img className="avatar showMe" src="./homepage/pug.png" />
            )}
            {hoveredTag === "python" && (
              <img className="avatar showMe" src="./homepage/python.png" />
            )}
            {hoveredTag === "react" && (
              <img className="avatar showMe" src="./homepage/React.png" />
            )}
            {hoveredTag === "sql" && (
              <img className="avatar showMe" src="./homepage/SQL.png" />
            )}
            {hoveredTag === "typescript" && (
              <img className="avatar showMe" src="./homepage/typescript.png" />
            )}
            {hoveredTag === "webpack" && (
              <img className="avatar showMe" src="./homepage/webpack.png" />
            )}
          </div>

          <div className="tvpixel">
            {emptyInd && (
              <div className="intro showMe">
                <div className="who">
                {t("blendingCreativity")}
                </div>
                <div className="who">
                {t("checkOut")}
                </div>
              </div>
            )}
            {hoveredTag === "python" && (
              <div className="hover-indicator showMe">
               {t("pythonExperience")}
              </div>
            )}
            {hoveredTag === "javascript" && (
              <div className="hover-indicator showMe">
              {t("javascriptExperience")}
              </div>
            )}
            {hoveredTag === "pug" && (
              <div className="hover-indicator showMe">
               {t("htmlExperience")}
              </div>
            )}
            {hoveredTag === "css" && (
              <div className="hover-indicator showMe">
                {t("cssExperience")}
              </div>
            )}
            {hoveredTag === "django" && (
              <div className="hover-indicator showMe">
                {t("djangoExperience")}
              </div>
            )}
            {hoveredTag === "java" && (
              <div className="hover-indicator showMe">
              {t("springExperience")}
              </div>
            )}
            {hoveredTag === "sql" && (
              <div className="hover-indicator showMe">
              {t("mysqlExperience")}
              </div>
            )}
            {hoveredTag === "spring" && (
              <div className="hover-indicator showMe">
               {t("fullStackExperience")}
              </div>
            )}
            {hoveredTag === "node" && (
              <div className="hover-indicator showMe">
                {t("nodejsExperience")}
              </div>
            )}
            {hoveredTag === "react" && (
              <div className="hover-indicator showMe">
               {t("reactExperience")}
              </div>
            )}
            {hoveredTag === "angular" && (
              <div className="hover-indicator showMe">
               {t("angularExperience")}
              </div>
            )}
            {hoveredTag === "webpack" && (
              <div className="hover-indicator showMe">
                {t("webpackExperience")}
              </div>
            )}
            {hoveredTag === "typescript" && (
              <div className="hover-indicator showMe">
                {t("typescriptExperience")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
