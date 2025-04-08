import { useState } from "react";
import "./hexagon.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaCode,
} from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { SiCodewars } from "react-icons/si";

function Hexagon() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);

  function open() {
    if (hovered == false) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered2((prev) => !prev);
    if (hovered4 == true) setHovered2((prev) => !prev);
    if (hovered5 == true) setHovered2((prev) => !prev);
  }

  function open2() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == false) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered2((prev) => !prev);
    if (hovered4 == true) setHovered2((prev) => !prev);
    if (hovered5 == true) setHovered2((prev) => !prev);
  }

  function open3() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == false) setHovered2((prev) => !prev);
    if (hovered4 == true) setHovered2((prev) => !prev);
    if (hovered5 == true) setHovered2((prev) => !prev);
  }

  function open4() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered2((prev) => !prev);
    if (hovered4 == false) setHovered2((prev) => !prev);
    if (hovered5 == true) setHovered2((prev) => !prev);
  }

  function open5() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered2((prev) => !prev);
    if (hovered4 == true) setHovered2((prev) => !prev);
    if (hovered5 == false) setHovered2((prev) => !prev);
  }

  return (
    <div className="contact_container">
      <div className="guard">
        <section id="hexagon-element">
          <div className="face front">
            <a
              href="https://www.linkedin.com/in/micha%C5%82-kikowski-6bab9720b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={62} />
            </a>
          </div>
          <div className="face side2"></div>
          <div className="face side3">
            <a
              href="https://github.com/Safkiar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={62} />
            </a>
          </div>
          <div className="face side4">
            <FaEnvelope onMouseEnter={() => open2()} size={62} />
          </div>
          <div className="face side5">
            <a
              href="https://www.codewars.com/users/MrKikowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodewars size={60} />
            </a>
          </div>
          <div className="face side6">
            <FaPhone className="color" onMouseEnter={() => open()} size={54} />
          </div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </section>
        <div className="shadow"></div>
      </div>
      <div className="show_contact">
        <h3>Contact me </h3>
        {hovered && <p className=" showMe">+48 788 396 380</p>}
        {hovered2 && <p className="showMe">m.kikowski97@gmail.com</p>}
        {/* {hovered3 && <p className="showMe">m.LinkedIn </p>} */}
      </div>
    </div>
  );
}

export default Hexagon;

//  onMouseLeave={() => setHovered(false)}
