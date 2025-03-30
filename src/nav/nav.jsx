import { useNavigate } from "react-router-dom";
import "./nav.css";
import { useState } from "react";

function Nav() {
  const navigate = useNavigate();
  const [isDay, setIsDay] = useState(false);

  const toggleTheme = () => {
    setIsDay((prev) => !prev);
  };

  return (
    <div>
      <div onClick={toggleTheme} className="darkmode">
        <div
          className={`sun icon-toggle ${
            isDay ? "animate-down" : "invisibleClass animate-up"
          }`}
        >
          <img src="/sun.png" alt="Sun" />
        </div>

        <div
          className={`moon icon-toggle invisibleClass ${
            !isDay ? "animate-down2 visibleClass" : "animate-up2"
          }`}
        >
          <img src="/moon.png" alt="Moon" />
        </div>
      </div>
      <div id="page" className="site">
        <div className="container">
          <nav>
            <input type="checkbox" id="link" hidden />
            <label htmlFor="link" className="link">
              <i className="menu ri-menu-3-line r1-2x"></i>
              <i className="close ri-close-line r1-2x"></i>
            </label>
            <ul className="submenu">
              <li>
                <a href="#" onClick={() => navigate("/")}>
                  <span>Home</span>
                  <i className="ri-home-line"></i>
                </a>
              </li>
              <li onClick={() => navigate("/projects")}>
                <a href="#">
                  <span>Projects</span>
                  <i className="ri-folder-3-line"></i>
                </a>
              </li>
              <li onClick={() => navigate("/certificates")}>
                <a href="#">
                  <span>Certificates</span>
                  <i className="ri-medal-line"></i>
                </a>
              </li>
              <li onClick={() => navigate("/experience")}>
                <a href="#">
                  <span>Experience</span>
                  <i className="ri-briefcase-line"></i>
                </a>
              </li>

              <li onClick={() => navigate("/contact")}>
                <a href="#">
                  <span>Contact</span>
                  <i className="ri-user-line"></i>
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
