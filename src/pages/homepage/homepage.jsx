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
          if (texts.includes(text)) {
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
                  Blending creativity with discipline - I build refined UIs,
                  handle data daily, and grow fast across the stack.
                </div>
                <div className="who">
                  Check out my projects, certificates, and hover over the sphere
                  elements!
                </div>
              </div>
            )}
            {hoveredTag === "python" && (
              <div className="hover-indicator showMe">
                I completed one course and one project. I'm currently using
                Python at work, where I've written many scripts. I'm well-versed
                in Pandas, Selenium, Django, and NumPy. I'm still actively
                investing in this area.
              </div>
            )}
            {hoveredTag === "javascript" && (
              <div className="hover-indicator showMe">
                I completed two courses and built four projects using plain
                JavaScript. It's worth mentioning that I built a chess game
                using just JS. I'm also highly skilled in React, TypeScript, and
                Angular.
              </div>
            )}
            {hoveredTag === "pug" && (
              <div className="hover-indicator showMe">
                I'm familiar with various HTML templating systems and built one
                project using Pug.
              </div>
            )}

            {hoveredTag === "css" && (
              <div className="hover-indicator showMe">
                I completed two CSS courses and built many projects. My CSS
                knowledge is extensive — I'm experienced with SCSS, Tailwind,
                and Styled Components.
              </div>
            )}

            {hoveredTag === "django" && (
              <div className="hover-indicator showMe">
                I built one project using Django connected to a React frontend.
              </div>
            )}
            {hoveredTag === "java" && (
              <div className="hover-indicator showMe">
                I completed two courses and created a full-stack app using
                Spring. Java is also used as the backend in a project for the
                foundation.
              </div>
            )}
            {hoveredTag === "sql" && (
              <div className="hover-indicator showMe">
                I completed two courses and built a full-stack project with
                MySQL. At work, I use Microsoft SQL Server daily with T-SQL. I'm
                familiar with MySQL and PostgreSQL.
              </div>
            )}
            {hoveredTag === "spring" && (
              <div className="hover-indicator showMe">
                I built a full-stack project with Spring, Angular, and MySQL. I
                also completed two courses on Spring.
              </div>
            )}
            {hoveredTag === "node" && (
              <div className="hover-indicator showMe">
                I completed one course on Node.js.
              </div>
            )}
            {hoveredTag === "react" && (
              <div className="hover-indicator showMe">
                I spent over 100 hours on a React course and built 8 projects
                with it. I'm proficient in React Router, Redux, and many
                additional libraries.
              </div>
            )}
            {hoveredTag === "angular" && (
              <div className="hover-indicator showMe">
                I completed one course and built three projects using Angular —
                one of them is a full-stack app, and another is part of a
                foundation project. I also work with Angular daily in my role as
                a developer at the foundation.
              </div>
            )}
            {hoveredTag === "webpack" && (
              <div className="hover-indicator showMe">
                I built one application using Webpack.
              </div>
            )}
            {hoveredTag === "typescript" && (
              <div className="hover-indicator showMe">
                I completed two courses and built three projects using
                TypeScript.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
