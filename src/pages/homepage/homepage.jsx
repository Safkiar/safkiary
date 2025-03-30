import Cube from "./cube";
import Sphere from "./sphere";
import "./homepage.css";

function homepage() {
  return (
    <div className="homepage_container">
      <div className="sphere_container">
        <Sphere></Sphere>
      </div>
      {/* <Cube></Cube> */}
      <div className="tvbox">
        <div className="tvpixel">test</div>
      </div>
    </div>
  );
}

export default homepage;
