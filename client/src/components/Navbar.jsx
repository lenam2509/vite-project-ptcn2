import { BiSolidUser, BiSolidCart, BiSolidTrashAlt } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useRef } from "react";
export default function Navbar() {
  const NavRef = useRef();
  const CartRef = useRef();
  const toggleNav = () => {
    NavRef.current.classList.toggle("responsive_nav");
  };

  const toggleCart = () => {
    CartRef.current.classList.toggle("active_cart");
  };

  const Links = [
    {
      label: "Trang chủ",
      to: "/",
    },
    {
      label: "Giới thiệu",
      to: "/",
    },
    {
      label: "Thực đơn",
      to: "/products",
    },
    {
      label: "Thanh toán",
      to: "/checkout",
    },
    {
      label: "Liên hệ",
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

      <h2 className="header_logo">Food Station</h2>

      <div className="header_icons">
        <Link to="/login">
          <BiSolidUser />
        </Link>
        <div className="cart" onClick={toggleCart}>
          <BiSolidCart /> <span>0</span>
        </div>
        <div className="cart_detail" ref={CartRef}>
          <h2>Giỏ hàng</h2>
          <div className="cart_item">
            <img src="https://picsum.photos/200/300" alt="" />
            <div className="cart_item_detail">
              <h3>Trà sữa</h3>
              <p>100.000</p>
              <p>x5</p>
            </div>
            <BiSolidTrashAlt />
          </div>
            
          <div className="cart_total_money">
            <p>Tổng tiền:</p> <span>100.000vnđ</span>
          </div>
          <div className="cart_btn">
            <button className="cart_btn_buy">Thanh toán</button>
          </div>
        </div>
      </div>
    </header>
  );
}
