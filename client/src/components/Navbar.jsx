import { BiSolidUser, BiSolidCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useRef } from "react";
export default function Navbar() {
  const NavRef = useRef();

  const toggleNav = () => {
    NavRef.current.classList.toggle("mobile_nav");
  };

  const Links = [
    {
      label: "Trang chủ",
      to: "/",
    },
    {
      label: "Sản phẩm",
      to: "/",
    },
    {
      label: "Sale",
      to: "/",
    },
  ];
  return (
    <nav className="navbar">
      <button className="nav_toggle" onClick={toggleNav}>
        <FaBars />
      </button>
      <ul className="navbar__links" ref={NavRef}>
        {Links.map((link, index) => (
          <li className="navbar__link" key={index}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="navbar__logo">
        <h2>Logo</h2>
      </div>

      <div className="navbar__icons">
        <BiSolidUser />
        <div className="navbar_cart_icon">
          <BiSolidCart /> <span>0</span>
        </div>
      </div>
    </nav>
  );
}
