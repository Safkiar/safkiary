import { useNavigate } from "react-router-dom";
import "./nav.css";
import { useDarkMode } from "../darkmode/DarkModeContext";
import { useRef } from "react";

function Nav() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const checkboxRef = useRef(null);

  return (
    <div>
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
      <div id="page" className="site">
        <div className="container">
          <nav>
            <input type="checkbox" id="link" hidden ref={checkboxRef} />
            <label
              htmlFor="link"
              className="link"
              onClick={() => {
                if (checkboxRef.current) {
                  setTimeout(() => {
                    checkboxRef.current.checked = false;
                  }, 3000);
                }
              }}
            >
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
                  <span onClick={() => navigate("/")}>Home</span>
                  <i onClick={() => navigate("/")} className="ri-home-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span onClick={() => navigate("/projects")}>Projects</span>
                  <i
                    onClick={() => navigate("/projects")}
                    className="ri-folder-3-line"
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span onClick={() => navigate("/certificates")}>
                    Certificates
                  </span>
                  <i
                    onClick={() => navigate("/certificates")}
                    className="ri-medal-line"
                  ></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span onClick={() => navigate("/experience")}>
                    Experience
                  </span>
                  <i
                    onClick={() => navigate("/experience")}
                    className="ri-briefcase-line"
                  ></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <span onClick={() => navigate("/contact")}>Contact</span>
                  <i
                    onClick={() => navigate("/contact")}
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
