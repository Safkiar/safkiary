import { slides0 } from './slides/certificates';
import { slides1 } from './slides/certificates';
import { slides2 } from './slides/certificates';
import { slides3 } from './slides/certificates';
import './certificates.css';
import { useRef, useEffect, useReducer, useState } from 'react';
import Buttons from './buttons';
import Spinner from '../../spinner/spinner';

// Tilt effect
function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) return;

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) return;
      if (!state.rect) state.rect = el.getBoundingClientRect();

      state.mouseX = e.clientX;
      state.mouseY = e.clientY;

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px);
      el.style.setProperty('--py', py);
    };

    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [active]);

  return ref;
}

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide2"
      data-active={active}
      data-offset={offset}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div className="testBackground">
        <div
          className="slideBackground2"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
      </div>
      <div className={`slideContent2 dot ${active ? 'active' : ''}`} />
    </div>
  );
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, action) => {
  const { type, length } = action;

  if (type === 'NEXT') {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % length,
    };
  }

  if (type === 'PREV') {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? length - 1 : state.slideIndex - 1,
    };
  }

  if (type === 'RESET') {
    return {
      slideIndex: 0,
    };
  }

  return state;
};

function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  const slides = [slides0, slides1, slides2, slides3];
  const activeSlides = slides[activeIndex];
  const currentLength = activeSlides.length;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mainSlide = activeSlides[state.slideIndex];
    const img = new Image();
    img.src = mainSlide.image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [state.slideIndex, activeSlides]);

  useEffect(() => {
    dispatch({ type: 'RESET' });
  }, [activeIndex]);

  return (
    <div className="rel_container">
      <Buttons activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      <div className="parentz">
        <div className="parentz2">
          <div className="slides2">
            <button
              className="button_slides2"
              onClick={() => dispatch({ type: 'PREV', length: currentLength })}
            >
              ‹
            </button>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {[...activeSlides, ...activeSlides, ...activeSlides].map(
                  (slide, i) => {
                    const offset = currentLength + (state.slideIndex - i);
                    return <Slide slide={slide} offset={offset} key={i} />;
                  }
                )}
              </>
            )}
            <button
              className="button_slides2"
              onClick={() => dispatch({ type: 'NEXT', length: currentLength })}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
