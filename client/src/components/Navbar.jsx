import {
  BiSolidUser,
  BiSolidCart,
  BiSolidTrashAlt,
  BiLogOut,
} from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useEffect, useRef, useState } from "react";
import Product from "../assets/images/product.jpg";
import Logo from "../assets/images/logo.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const NavRef = useRef();
  const CartRef = useRef();
  const history = useHistory();

  const toggleNav = () => {
    NavRef.current.classList.toggle("responsive_nav");
  };

  const toggleCart = () => {
    CartRef.current.classList.toggle("active_cart");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login");
    toast.success("Đăng xuất thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
  };



  const Links = [
    {
      label: "Trang chủ",
      to: "/",
    },
    {
      label: "Giới thiệu",
      to: "/about",
    },
    {
      label: "Sản phẩm",
      to: "/products",
    },
    {
      label: "Liên hệ",
      to: "/contact",
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

      <h2 className="header_logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </h2>

      <div className="header_icons">
        {localStorage.getItem("token") && <BiLogOut onClick={logout} />}

        <Link to={localStorage.getItem("token") ? "/userinfo" : "/login"}>
          <BiSolidUser />
        </Link>

        <div className="cart" onClick={toggleCart}>
          <BiSolidCart /> <span style={{ color: "black" }}>0</span>
        </div>
        <div className="cart_detail" ref={CartRef}>
          <h2>Giỏ hàng</h2>
          <div className="cart_item">
            <img src={Product} alt="" />
            <div className="cart_item_detail">
              <h3>Trà vải</h3>
              <p className="price">100.000đ</p>
              <p className="quantity">x5</p>
            </div>
            <BiSolidTrashAlt />
          </div>

          <div className="cart_total_money">
            <p>Tổng tiền:</p> <span>100.000đ</span>
          </div>
          <div className="cart_btn">
            <Link to="/cart" className="cart_btn_buy">
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
