import { useEffect, useState } from "react";
import "./experience.css";
import { FaFileDownload } from "react-icons/fa";

function Experience() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);
  const [hovered9, setHovered9] = useState(false);
  const [hovered10, setHovered10] = useState(false);
  const [hovered11, setHovered11] = useState(false);
  const [hovered12, setHovered12] = useState(false);

  const [emptyInd, setEmptyInd] = useState(true);

  useEffect(() => {
    const allHovered = [
      hovered,
      hovered2,
      hovered3,
      hovered4,
      hovered5,
      hovered6,
      hovered7,
      hovered8,
      hovered9,
      hovered10,
      hovered11,
      hovered12,
    ];
    setEmptyInd(allHovered.every((val) => val === false));
  }, [
    hovered,
    hovered2,
    hovered3,
    hovered4,
    hovered5,
    hovered6,
    hovered7,
    hovered8,
    hovered9,
    hovered10,
    hovered11,
    hovered12,
  ]);

  return (
    <div className="graph">
      <div className="grid-container">
        <div className="item item-1">
          <ul className="skewul">
            <li
              className="a12 skewli"
              onMouseEnter={() => setHovered12(true)}
              onMouseLeave={() => setHovered12(false)}
              data-icon="&#xf015"
            >
              <a href="#">MySQL</a>
            </li>
            <li
              className="a11 skewli"
              onMouseEnter={() => setHovered11(true)}
              onMouseLeave={() => setHovered11(false)}
              data-icon="&#xf015"
            >
              <a href="#">Pug</a>
            </li>
            <li
              className="a10 skewli"
              onMouseEnter={() => setHovered10(true)}
              onMouseLeave={() => setHovered10(false)}
              data-icon="&#xf015"
            >
              <a href="#">Webpack</a>
            </li>
            <li
              className="a9 skewli"
              onMouseEnter={() => setHovered9(true)}
              onMouseLeave={() => setHovered9(false)}
              data-icon="&#xf015"
            >
              <a href="#">Django</a>
            </li>
            <li
              className="a8 skewli"
              onMouseEnter={() => setHovered8(true)}
              onMouseLeave={() => setHovered8(false)}
              data-icon="&#xf015"
            >
              <a href="#">Spring</a>
            </li>
            <li
              className="a7 skewli"
              onMouseEnter={() => setHovered7(true)}
              onMouseLeave={() => setHovered7(false)}
              data-icon="&#xf015"
            >
              <a href="#">Angular</a>
            </li>
            <li
              className="a6 skewli"
              data-icon="&#xf015"
              onMouseEnter={() => setHovered6(true)}
              onMouseLeave={() => setHovered6(false)}
            >
              <a href="#">TypeScript</a>
            </li>
            <li
              className="a5 skewli"
              data-icon="&#xf015"
              onMouseEnter={() => setHovered5(true)}
              onMouseLeave={() => setHovered5(false)}
            >
              <a href="#">CSS</a>
            </li>
            <li
              className="a4 skewli"
              data-icon="&#xf015"
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <a href="#">JavaScript</a>
            </li>
            <li
              className="a3 skewli"
              data-icon="&#xf015"
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <a href="#">SCSS</a>
            </li>
            <li
              className="a2 skewli"
              data-icon="&#xf015"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <a href="#">Styled Components</a>
            </li>
            <li
              className="a1 skewli"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              data-icon="&#xf015"
            >
              <a href="#">React</a>
            </li>
          </ul>
        </div>
        <div className="item item-2">
          <div className="table">
            <div className="info">
              {emptyInd && <div className="fadeIn">Moje projekty</div>}
              {hovered && <div className="fadeIn">8 projektów</div>}
              {hovered2 && <div className="fadeIn">6 projektów</div>}
              {hovered3 && <div className="fadeIn">6 projektów</div>}
              {hovered4 && <div className="fadeIn">4 projekty</div>}
              {hovered5 && <div className="fadeIn">3 projekty</div>}
              {hovered6 && <div className="fadeIn">3 projekty</div>}
              {hovered7 && <div className="fadeIn">3 projekty</div>}
              {hovered8 && <div className="fadeIn">1 projekt</div>}
              {hovered9 && <div className="fadeIn">1 projekt</div>}
              {hovered10 && <div className="fadeIn">1 projekt</div>}
              {hovered11 && <div className="fadeIn">1 projekt</div>}
              {hovered12 && <div className="fadeIn">1 projekt</div>}
            </div>
          </div>
        </div>
        <div className="item item-3">
          <div className="add_info">
            <div className="table">
              <p className="title">Stworzonych projektów</p>
              <p className="number">15</p>
              <p className="title">Rozwiązanych zadań</p>
              <p className="number">720+</p>
              <p className="title">Godzin kursu</p>
              <p className="number">15</p>
            </div>
            <div className="PdfContainer">
              <div className="PdfWrapper">
                <p> Download CV </p>
                <div className="svg">
                  <a href="#" download>
                    <FaFileDownload />
                    English
                  </a>
                </div>
                <div className="svg">
                  <a href="#" download>
                    <FaFileDownload />
                    Polish
                  </a>
                </div>
              </div>
              <div className="PdfWrapper">
                <p> View CV </p>
                <div className="svg">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFileDownload />
                    English
                  </a>
                </div>
                <div className="svg">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFileDownload />
                    Polish
                  </a>
                </div>
              </div>
            </div>
            <div className="table">pracodawcy</div>
            <div className="img_container">
              <img className="wimg" src="./work/stadler.png" />
              <img className="wimg" src="./work/nordea.png" />
              <img className="wimg" src="./work/fundacja.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
