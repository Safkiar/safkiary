import { useNavigate } from "react-router-dom";
import "./nav.css";
import { useDarkMode } from "../darkmode/DarkModeContext";
import { useEffect, useRef, useState } from "react";
import { useTranslate } from "../translation/TranslationContext";

function Nav() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const checkboxRef = useRef(null);
  const { setLang, lang } = useTranslate();

  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const checkZoom = () => {
      const zoom = window.devicePixelRatio;
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);

      setIsZoomed(!isMobile && zoom >= 2);
    };
    checkZoom();
    window.addEventListener("resize", checkZoom);
    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    if (checkboxRef.current) checkboxRef.current.checked = false;
  };

  return (
    <div>
      <div className="translatormode">
        <div
          className={` ${lang === "pl" ? "animate-down2" : "animate-up2"}`}
          onClick={() => setLang(lang === "pl" ? "en" : "pl")}
        >
          <img src="/flags/Poland.png" />
        </div>
        <div
          className={` ${lang === "en" ? "animate-down" : " animate-up"}`}
          onClick={() => setLang(lang === "pl" ? "en" : "pl")}
        >
          <img src="/flags/England.png" />
        </div>
      </div>
      <div className="darkmode">
        <div
          className={`sun icon-toggle ${
            isDarkMode ? "animate-down2" : "animate-up2"
          } `}
        >
          <img onClick={toggleDarkMode} src="/sun.png" alt="Sun" />
        </div>{" "}
        <div
          className={`moon icon-toggle ${
            !isDarkMode ? "animate-down" : " animate-up"
          }`}
        >
          <img onClick={toggleDarkMode} src="/moon.png" alt="Moon" />
        </div>
      </div>
      <div id="page" className={`site ${isZoomed ? "zoomed" : ""}`}>
        <div className="container">
          <nav>
            <input type="checkbox" id="link" hidden ref={checkboxRef} />
            <label htmlFor="link" className="link">
              <i className="menu ri-menu-3-line r1-2x"></i>
              <i className="close ri-close-line r1-2x"></i>
            </label>
            <ul
              className="submenu"
              onMouseLeave={() => {
                if (checkboxRef.current) checkboxRef.current.checked = false;
              }}
            >
              <li>
                <a href="#">
                  <span onClick={() => handleNavigate("/")}>Home</span>
                  <i
                    onClick={() => handleNavigate("/")}
                    className="ri-home-line"
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span onClick={() => handleNavigate("/projects")}>
                    Projects
                  </span>
                  <i
                    onClick={() => handleNavigate("/projects")}
                    className="ri-folder-3-line"
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span onClick={() => handleNavigate("/certificates")}>
                    Certificates
                  </span>
                  <i
                    onClick={() => handleNavigate("/certificates")}
                    className="ri-medal-line"
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span onClick={() => handleNavigate("/experience")}>
                    Experience
                  </span>
                  <i
                    onClick={() => handleNavigate("/experience")}
                    className="ri-briefcase-line"
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span onClick={() => handleNavigate("/contact")}>
                    Contact
                  </span>
                  <i
                    onClick={() => handleNavigate("/contact")}
                    className="ri-user-line"
                  ></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
