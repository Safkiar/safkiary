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
        <div className="halving_card_title">
          <h3>Michał Kikowski - Software developer</h3>
        </div>
        <div className="halving_card">


       
        <div className="my_img_container">
          <img src="/Ja.jpg" alt="" />
        </div>
        <div className="tvpixel">
          {emptyInd && (
            <div className="intro showMe">
              <div className="who">
                Blending creativity with discipline - I build refined UIs,
                handle data daily, and grow fast across the stack.
              </div>
              <div className="who">
                Check out my projects, certificates and hover elements of the sphere!
              </div>
            </div>
          )}
          {hoveredTag === "python" && (
            <div className="hover-indicator showMe">
              I did one course and one project. I`m currently using it at work where I`ve made many scripts. I know well Pandas, Selenium, Django and NumPy. I`m still investing in this area.
            </div>
          )}
          {hoveredTag === "javascript" && (
            <div className="hover-indicator showMe">
              I did two courses and four project in plain javascript. Is worth to mention that I`ve build chess with just js. I`m very good at react, typescript and angular. 
            </div>
          )}
              {hoveredTag === "pug" && (
            <div className="hover-indicator showMe">
              I know how to work with different html. I`ve build one project with pug. 
            </div>
          )}
      
                 {hoveredTag === "css" && (
            <div className="hover-indicator showMe">
              I did two courses with css and many projects. My knowledge is very vast. I`m familiar with scss, tailwind and styled components. 
            </div>
          )}
      
                  {hoveredTag === "django" && (
            <div className="hover-indicator showMe">
              I`ve build one project with django connected to react front end. 
            </div>
          )}
                  {hoveredTag === "java" && (
            <div className="hover-indicator showMe">
              I did two courses and I made fullstack app with spring. Java is also backend on project for foundation.
            </div>
          )}
                  {hoveredTag === "sql" && (
            <div className="hover-indicator showMe">
              I did two courses and fullstack project with mysql. I use daily microsoft server at work with T-SQL. I know mysql, postgressql. 
            </div>
          )}
                  {hoveredTag === "spring" && (
            <div className="hover-indicator showMe">
              I did fullstack project with spring, angular and mysql. I did two courses. 
            </div>
          )}
                  {hoveredTag === "node" && (
            <div className="hover-indicator showMe">
              I`ve finished one course with node.
            </div>
          )}
                        {hoveredTag === "react" && (
            <div className="hover-indicator showMe">
              I did over 100 hours on course with it. I`ve build 8 projects with react. I know react router, redux and many more libraries. 
            </div>
          )}
                        {hoveredTag === "angular" && (
            <div className="hover-indicator showMe">
              I`ve did one course and three projects, one is fullstack app other is done with foundation. I also work with it daily at foundation as developer. 
            </div>
          )}
                        {hoveredTag === "webpack" && (
            <div className="hover-indicator showMe">
              I`ve build one application with webpack.
            </div>
          )}
                        {hoveredTag === "typescript" && (
            <div className="hover-indicator showMe">
              I`ve did two courses and 3 projects with typescript.
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Homepage;
