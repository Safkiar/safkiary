import { useEffect, useState } from "react";
import "./certificates.css";
function Certificates() {
  const [carouselDom, setCarouselDom] = useState(null);
  const [sliderDom, setSliderDom] = useState(null);
  const [thumbnailDom, setThumbnailDom] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [timeDom, setTimeDom] = useState(null);
  const [nextDom, setNextDom] = useState(null);
  const [prevDom, setPrevDom] = useState(null);

  useEffect(() => {
    if (!carouselDom || !sliderDom || !thumbnailDom || !nextDom || !prevDom)
      return;

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    let runTimeOut;
    let runNextAuto;

    const showSlider = (type) => {
      const SliderItemsDom = sliderDom.querySelectorAll(".item");
      const thumbnailItemsDom = thumbnailDom.querySelectorAll(".item");

      if (type === "next") {
        sliderDom.appendChild(SliderItemsDom[0]);
        thumbnailDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        sliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, [carouselDom, sliderDom, thumbnailDom, nextDom, prevDom]);

  return (
    <div className="fullview">
      <header className="headercer">
        <nav>
          <a className="linker" href="">
            Home
          </a>
          <a className="linker" href="">
            Contacts
          </a>
          <a className="linker" href="">
            Info
          </a>
        </nav>
      </header>

      <div className="carousel" ref={setCarouselDom}>
        <div className="list" ref={setSliderDom}>
          <div className="item">
            <img src="/img1.jpg" alt="img1" />
            <div className="contentt">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">Opis slajdu 1</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/img2.jpg" alt="img2" />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">Opis slajdu 2</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/img3.jpg" alt="img3" />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">Opis slajdu 3</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/img4.jpg" alt="img4" />
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">Opis slajdu 4</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail" ref={setThumbnailDom}>
          <div className="item">
            <img src="/img2.jpg" alt="thumb1" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>

          <div className="item">
            <img src="/img3.jpg" alt="thumb2" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>

          <div className="item">
            <img src="/img4.jpg" alt="thumb3" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>

          <div className="item">
            <img src="/img1.jpg" alt="thumb4" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="prev" ref={setPrevDom}>
            ◀
          </button>
          <button id="next" ref={setNextDom}>
            ▶
          </button>
        </div>

        <div className="time" ref={setTimeDom}></div>
      </div>
    </div>
  );
}

export default Certificates;
