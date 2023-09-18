import { BiSolidUser, BiSolidCart } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/">Home</a>
        </li>
        <li className="navbar__link">
          <a href="/">Home</a>
        </li>
        <li className="navbar__link">
          <a href="/">Home</a>
        </li>
      </ul>

      <div className="navbar__logo">
        <h2>Logo</h2>
      </div>

      <div className="navbar__icons">
        <BiSolidUser />
        <BiSolidCart />
      </div>
    </nav>
  );
}
