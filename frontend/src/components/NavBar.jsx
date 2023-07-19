import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <header>
      <Link id="logo" to="description" spy smooth duration={500}>
        <span>AMANI</span>NFZ
      </Link>
      <nav>
        <Link className="navLink" to="projects" spy smooth duration={500}>
          Projets
        </Link>
        <Link className="navLink" to="footer" spy smooth duration={1000}>
          Contact
        </Link>
      </nav>
      <button type="button" className="burgerMenu">
        <i className="burgerBar" />
        <i className="burgerBar middleBar" />
        <i className="burgerBar" />
      </button>
    </header>
  );
}
