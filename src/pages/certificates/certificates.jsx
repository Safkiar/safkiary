import slides from "./slides/certificates";
import "./certificates.css";
import { useRef, useEffect, useReducer } from "react";
import Buttons from "./buttons";

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

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
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

  return (
    <div
      ref={ref}
      className="slide2"
      data-active={active}
      data-offset={offset}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground2"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className={`slideContent2 dot ${active ? "active" : ""}`}
        // style={{
        //   backgroundImage: `url('${slide.image}')`,
        // }}
      ></div>
    </div>
    // </div>
  );
}

function Certificates() {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className="rel_container">
      <Buttons></Buttons>
    <div className="parent">
      <div className="parent2">
        <div className="slides2">
          <button
            className="button_slides2"
            onClick={() => dispatch({ type: "PREV" })}
            >
            ‹
          </button>

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button
            className="button_slides2"
            onClick={() => dispatch({ type: "NEXT" })}
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
