import { useState } from 'react';
import './hexagon.css';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaCode,
} from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import { SiCodewars } from 'react-icons/si';
import { useTranslate } from '../../translation/TranslationContext';

function Hexagon() {
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useTranslate();

  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);

  function open() {
    if (hovered == false) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered3((prev) => !prev);
    if (hovered4 == true) setHovered4((prev) => !prev);
    if (hovered5 == true) setHovered5((prev) => !prev);
  }

  function open2() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == false) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered3((prev) => !prev);
    if (hovered4 == true) setHovered4((prev) => !prev);
    if (hovered5 == true) setHovered5((prev) => !prev);
  }

  function open3() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == false) setHovered3((prev) => !prev);
    if (hovered4 == true) setHovered4((prev) => !prev);
    if (hovered5 == true) setHovered5((prev) => !prev);
  }

  function open4() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered3((prev) => !prev);
    if (hovered4 == false) setHovered4((prev) => !prev);
    if (hovered5 == true) setHovered5((prev) => !prev);
  }

  function open5() {
    if (hovered == true) setHovered((prev) => !prev);
    if (hovered2 == true) setHovered2((prev) => !prev);
    if (hovered3 == true) setHovered3((prev) => !prev);
    if (hovered4 == true) setHovered4((prev) => !prev);
    if (hovered5 == false) setHovered5((prev) => !prev);
  }

  return (
    <>
      <div className="contact_container">
        <div className="guard">
          <section
            id="hexagon-element"
            className={isPaused ? 'paused' : ''}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="face front"
              onMouseEnter={() => {
                setIsPaused(true);
                open3();
              }}
            >
              <a
                href="https://www.linkedin.com/in/micha%C5%82-kikowski-6bab9720b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={62} />
              </a>
            </div>
            <div
              className="face side2"
              onMouseEnter={() => {
                setIsPaused(false);
              }}
            ></div>
            <div
              className="face side3"
              onMouseEnter={() => {
                setIsPaused(true);
                open4();
              }}
            >
              <a
                href="https://github.com/Safkiar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={62} />
              </a>
            </div>
            <div className="face side4" onMouseEnter={() => open2()} size={62}>
              <FaEnvelope size={64} />
            </div>
            <div
              className="face side5"
              onMouseEnter={() => {
                setIsPaused(true);
                open5();
              }}
            >
              <a
                href="https://www.codewars.com/users/MrKikowski"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodewars size={60} />
              </a>
            </div>
            <div
              className="face side6"
              onMouseEnter={() => {
                setIsPaused(true);
                open();
              }}
            >
              <FaPhone className="color" size={54} />
            </div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </section>
          <div className="shadow"></div>
        </div>
        <div className="show_contact">
          <h3> {t('contact')} </h3>
          {hovered && <p className=" showMe">+48 788 396 380</p>}
          {hovered2 && <p className="showMe">m.kikowski97@gmail.com</p>}
          {hovered3 && <p className="showMe">LinkedIn </p>}
          {hovered4 && <p className="showMe">Github </p>}
          {hovered5 && <p className="showMe">Codewars </p>}
        </div>
        <ul className="mininav">
          <li>
            {' '}
            <a
              href="https://github.com/Safkiar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/micha%C5%82-kikowski-6bab9720b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            {' '}
            <a
              href="https://www.codewars.com/users/MrKikowski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodewars size={20} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hexagon;

//  onMouseLeave={() => setHovered(false)}
