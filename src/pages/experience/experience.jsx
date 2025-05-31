import { useEffect, useState } from 'react';
import './experience.css';
import { FaFileDownload } from 'react-icons/fa';
import { useTranslate } from '../../translation/TranslationContext';

function Experience() {
  const { t } = useTranslate();
  const [hovered, setHovered] = useState(false);
  const [hovered2] = useState(false);
  const [hovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5] = useState(false);
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
              className="a8 skewli"
              onMouseEnter={() => setHovered8(true)}
              onMouseLeave={() => setHovered8(false)}
              data-icon="&#xf015"
            >
              <a href="#">Spring</a>
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
              className="a4 skewli"
              data-icon="&#xf015"
              onMouseEnter={() => setHovered4(true)}
              onMouseLeave={() => setHovered4(false)}
            >
              <a href="#">JavaScript</a>
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
              {emptyInd && <div className="fadeIn">{t('myProjects')}</div>}
              {hovered && <div className="fadeIn">8 {t('projects2')}</div>}
              {hovered2 && <div className="fadeIn">6 {t('projects2')}</div>}
              {hovered3 && <div className="fadeIn">6 {t('projects2')}</div>}
              {hovered4 && <div className="fadeIn">4 {t('projects')}</div>}
              {hovered5 && <div className="fadeIn">3 {t('projects')}</div>}
              {hovered6 && <div className="fadeIn">3 {t('projects')}</div>}
              {hovered7 && <div className="fadeIn">3 {t('projects')}</div>}
              {hovered8 && <div className="fadeIn">1 {t('project')}</div>}
              {hovered9 && <div className="fadeIn">2 {t('projects')}</div>}
              {hovered10 && <div className="fadeIn">1 {t('project')}</div>}
              {hovered11 && <div className="fadeIn">1 {t('project')}</div>}
              {hovered12 && <div className="fadeIn">1 {t('project')}</div>}
            </div>
          </div>
        </div>
        <div className="item item-3">
          <div className="add_info">
            <div className="table">
              <p className="title">{t('createdProjects')}</p>
              <p className="number">16</p>
              <p className="title">{t('solvedTasks')}</p>
              <p className="number">760+</p>
              <p className="title">{t('courseHours')}</p>
              <p className="number">571</p>
            </div>
            <div className="PdfContainer">
              <div className="PdfWrapper">
                <p> {t('downloadCV')}</p>
                <div className="svg">
                  <a  href="./CV-ENGLISH-MK.pdf" download>
                    <FaFileDownload />
                    {t('languageEnglish')}
                  </a>
                </div>
                <div className="svg">
                  <a href="./CV-POLSKA-MK.pdf" download>
                    <FaFileDownload />
                    {t('languagePolish')}
                  </a>
                </div>
              </div>
              <div className="PdfWrapper">
                <p> {t('viewCV')} </p>
                <div className="svg">
                  <a
                    href="./CV-ENGLISH-MK.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileDownload />
                    {t('languageEnglish')}
                  </a>
                </div>
                <div className="svg">
                  <a
                   href="./CV-POLSKA-MK.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFileDownload />
                    {t('languagePolish')}
                  </a>
                </div>
              </div>
            </div>
            <div className="table">{t('employer')}</div>
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
