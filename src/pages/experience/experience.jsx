import { useState } from "react";
import "./experience.css";
import Buttons from "./buttons";

function Experience() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);

  return (
    <div className="graph">
      <ul className="skewul">
        <li
          className="a6 skewli"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          data-icon="&#xf015"
        >
          <a href="#">React</a>
        </li>
        <li
          className="a5 skewli"
          data-icon="&#xf015"
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          <a href="#">Angular</a>
        </li>
        <li
          className="a4 skewli"
          data-icon="&#xf015"
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          <a href="#">JavaScript</a>
        </li>
        <li
          className="a3 skewli"
          data-icon="&#xf015"
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
          <a href="#">JAVA SPRING</a>
        </li>
        <li
          className="a2 skewli"
          data-icon="&#xf015"
          onMouseEnter={() => setHovered5(true)}
          onMouseLeave={() => setHovered5(false)}
        >
          <a href="#">PYTHON</a>
        </li>
        <li
          className="a1 skewli"
          data-icon="&#xf015"
          onMouseEnter={() => setHovered6(true)}
          onMouseLeave={() => setHovered6(false)}
        >
          <a href="#">webpack</a>
        </li>
      </ul>
      <div className="table">
        <div className="info">
          {hovered && <div>tyle mam projektów</div>}
          {hovered2 && <div>taads</div>}
          {hovered3 && <div>asd</div>}
          {hovered4 && <div>zxc</div>}
          {hovered5 && <div>asd</div>}
          {hovered6 && <div>qdsa</div>}
        </div>
      </div>
      <Buttons />
    </div>
  );
}

export default Experience;
