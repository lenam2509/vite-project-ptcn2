import React from "react";
import { Link } from "react-router-dom";
import { BiSolidCartAdd } from "react-icons/bi";
import Product from "../assets/images/product.jpg";
import "../styles/productcard.css";
export default function ProductCard({ name, img, price }) {
  return (
    <div className="product_card">
      <Link to="/product/1">
        <div className="product_card_img">
          <img src={img ? img : Product} alt="" />
        </div>
      </Link>
      <div className="product_card_content">
        <h3>{name ? name : "Product Name"}</h3>
        <span>
          {price ? price.toLocaleString("vi-VN") + "đ" : "Product Price"}
        </span>
        <button className="btn_buy">
          Thêm vào giỏ <BiSolidCartAdd />
        </button>
      </div>
    </div>
  );
}
