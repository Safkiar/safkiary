import slides from './slides/project';
import './projects.css';
import { useRef, useEffect, useReducer, useState } from 'react';
import { useTranslate } from '../../translation/TranslationContext';
import Spinner from '../../spinner/spinner';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === 'PREV') {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);
  const { t } = useTranslate();

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      data-offset={offset}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className={`slideContent ${active ? 'active' : ''} ${
          slide.descriptionKey ? 'hov' : ''
        }`}
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        {active && (
          <div
            className={`
      ${active ? 'active' : ''}
      ${slide.descriptionKey ? 'colour' : ''}
    `}
          >
            <div className="git">
              <a
                href={slide.gitlink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                rel="noopener noreferrer"
              >
                <FaGithub size={62} />
              </a>
            </div>
            {!slide.onlygit && (
              <div className="web">
                <a
                  href={slide.link}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  rel="noopener noreferrer"
                >
                  <FaGlobe size={62} />
                </a>
              </div>
            )}
          </div>
        )}
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{t(slide.descriptionKey)}</p>
          <p className="slideData">{slide.data}</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visibleSlides = [
      slides[state.slideIndex],
      slides[(state.slideIndex + 1) % slides.length],
      slides[state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1],
    ];

    let loaded = 0;

    visibleSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;

      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === visibleSlides.length) {
          setIsLoading(false);
        }
      };
    });
  }, [state.slideIndex]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="hidden">
      <div className="parent">
        <div className="slides">
          <button
            className="button_slides"
            onClick={() => dispatch({ type: 'PREV' })}
          >
            ‹
          </button>

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button
            className="button_slides"
            onClick={() => dispatch({ type: 'NEXT' })}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
export default Projects;
