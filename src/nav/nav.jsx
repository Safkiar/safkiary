import { useNavigate } from "react-router-dom";
import "./nav.css";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a
            onClick={() => {
              navigate("/certificates");
            }}
            href="#"
          >
            certificates
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              navigate("/contact");
            }}
            href="#"
          >
            contact
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              navigate("/");
            }}
            href="#"
          >
            homepage
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              navigate("/projects");
            }}
            href="#"
          >
            projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
