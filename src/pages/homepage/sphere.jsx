import { useEffect } from "react";
import TagCloud from "TagCloud";
import "./sphere.css";

function Sphere() {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
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
      TagCloud(container, texts, options);
    };
  });

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
}

export default Sphere;
