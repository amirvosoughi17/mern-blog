import { Link } from "react-router-dom";

export function Menu() {
    return (
      <nav className="menu">
        <ul>
          <Link id="nav-link">Portfolio</Link>
          <Link id="nav-link">About</Link>
          <Link id="nav-link">Contact</Link>
          <Link id="nav-link">Search</Link>
        </ul>
      </nav>
    );
  }
  