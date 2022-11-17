import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="page-header">
      <div className="nav-wrapper">
        <Link to="/" className="brand-movies">
          Food list
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
