import "./hexagon.css";

function Hexagon() {
  return (
    <div className="guard">
      <section id="hexagon-element">
        <div className="face front">1</div>
        <div className="face side2">2</div>
        <div className="face side3">3</div>
        <div className="face side4">4</div>
        <div className="face side5">5</div>
        <div className="face side6">6</div>
        <div className="face top">TOP</div>
        <div className="face bottom">BOTTOM</div>
      </section>
      <div className="shadow"></div>
    </div>
  );
}

export default Hexagon;
