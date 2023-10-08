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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Slices/authSlice";
import { removeItem } from "../redux/Slices/cartSlice";

export default function Navbar() {
  const NavRef = useRef();
  const CartRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const toggleNav = () => {
    NavRef.current.classList.toggle("responsive_nav");
  };

  const toggleCart = () => {
    CartRef.current.classList.toggle("active_cart");
  };

  const Logout = () => {
    dispatch(logout());
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

  const RemoveCart = (id) => {
    dispatch(removeItem(id));
    toast.success("Xóa sản phẩm thành công", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

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
        {isAuthenticated && <BiLogOut onClick={Logout} />}

        <Link to={isAuthenticated ? "/userinfo" : "/login"}>
          <BiSolidUser />
        </Link>

        <div className="cart" onClick={toggleCart}>
          <BiSolidCart />{" "}
          <span style={{ color: "black" }}>{totalQuantity}</span>
        </div>

        {items.length > 0 && (
          <div className="cart_detail" ref={CartRef}>
            <h2>Giỏ hàng</h2>
            {items.map((item, index) => (
              <div className="cart_item" key={index}>
                <img src={item.img ? item.img : Product} alt="" />
                <div className="cart_item_detail">
                  <h3>{item.name ? item.name : "Product Name"}</h3>
                  <p className="price">
                    {item.price
                      ? item.price.toLocaleString("vi-VN") + "đ"
                      : "Product Price"}
                  </p>
                  <p className="quantity">x{item.quantity}</p>
                </div>
                <BiSolidTrashAlt
                  onClick={() => RemoveCart(item.id)}
                  size={30}
                />
              </div>
            ))}

            <div className="cart_total_money">
              <p>Tổng tiền:</p>{" "}
              <span>{totalPrice.toLocaleString("vi-VN")}đ</span>
            </div>
            <div className="cart_btn">
              <Link to="/cart" className="cart_btn_buy">
                Xem giỏ hàng
              </Link>
            </div>
          </div>
        )}

        {items.length === 0 && (
          <div className="cart_detail" ref={CartRef}>
            <div>
              <p className="text-2xl font-bold">Giỏ hàng trống</p>
            </div>
            <div className="cart_total_money">
              <p>Tổng tiền:</p> <span>0đ</span>
            </div>
          </div>
        )}

        {/* <div className="cart_detail" ref={CartRef}>
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
        </div> */}
      </div>
    </header>
  );
}
