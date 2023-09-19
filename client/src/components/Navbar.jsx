import { BiSolidUser, BiSolidCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useRef } from "react";
export default function Navbar() {
  const NavRef = useRef();

  const toggleNav = () => {
    NavRef.current.classList.toggle("responsive_nav");
  };

  const Links = [
    {
      label: "Trang chủ",
      to: "/",
    },
    {
      label: "Sản phẩm",
      to: "/products",
    },
    {
      label: "Sale",
      to: "/",
    },
    {
      label: "Hóa đơn",
      to: "/",
    },
  ];
  return (
    <header>
      <FaBars className="header_toggle" onClick={toggleNav} />
      <nav ref={NavRef}>
        {Links.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>

      <h2 className="header_logo">Logo</h2>

      <div className="header_icons">
        <BiSolidUser />
        <div className="cart">
          <BiSolidCart /> <span>0</span>
        </div>
      </div>
    </header>
  );
}
