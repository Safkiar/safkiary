import "./cube.css";

function Cube() {
  return (
    <div className="guard">
      <section id="example-element">
        <div className="face front">
          <img className="myphoto" src="/Ja.jpg"></img>
        </div>
        <div className="face back">
          <img className="myphoto" src="/matma.jpg"></img>
        </div>
        <div className="face right">
          <div className="text">Math</div>
        </div>
        <div className="face left">Front End</div>
        <div className="face top">
          <div className="text2">Back End</div>
        </div>
        <div className="face bottom">Data</div>
      </section>
      <div className="shadow"></div>
    </div>
  );
}

export default Cube;
