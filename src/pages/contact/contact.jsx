import "./mov.css";

function contact() {
  return (
    <div>
      {" "}
      <header>
        <a href="#" className="logo">
          iMovies
        </a>
        <ul className="nav">
          <li>
            {" "}
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#">asd</a>
          </li>
          <li>
            {" "}
            <a href="#">zxc</a>
          </li>
          <li>
            {" "}
            <a href="#">qwe</a>
          </li>
          <li>
            {" "}
            <a href="#">gfd</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="search" />
        </div>
      </header>
      <div className="banner">
        <div className="content active">
          <img src="" alt="" className="movie-title" />
          <h4>
            <span>2023</span>
            <span>
              <i>12+</i>
            </span>{" "}
            <span>2h 12min</span>
            <span>Romance</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            eligendi fuga optio illo quas minima perspiciatis, iusto maiores
            eaque reiciendis ut accusamus rem similique consequuntur expedita
            placeat cumque porro praesentium?
          </p>
          <div className="button">
            <a href="#">Watch</a>
            <a href="#">My List</a>
          </div>
        </div>
        <div className="carousell-box">
          <div className="carousell">
            <div className="carousell-item">
              <p>💫</p>
            </div>
            <div className="carousell-item">
              <p>💫</p>
            </div>
            <div className="carousell-item">
              <p>💫</p>
            </div>
            <div className="carousell-item">
              <p>💫</p>
            </div>
            <div className="carousell-item">
              <p>💫</p>
            </div>
          </div>
        </div>
        <a href="#" className="play">
          Watch
        </a>
        <ul className="sci">
          <li>
            <a href="#">a</a>
          </li>
          <li>
            <a href="#">b</a>
          </li>
          <li>
            <a href="#">c</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default contact;
