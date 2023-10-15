import "../../styles/cart.css";
import { BsFillTrashFill } from "react-icons/bs";
import Product from "../../assets/images/product.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  itemPLus,
  itemMinus,
  removeItem,
  clearCart,
} from "../../redux/Slices/cartSlice";
import { toast } from "react-toastify";

export default function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleCheckout = () => {
    if (isAuthenticated === false) {
      toast.error("Vui lòng đăng nhập để tiếp tục thanh toán");
      history.push("/login");
    } else {
      history.push("/checkout");
    }
  };

  const btnPlus = (id) => {
    dispatch(itemPLus(id));
  };

  const btnMinus = (id) => {
    dispatch(itemMinus(id));
  };

  return (
    <div className="cart_container">
      <table>
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Tổng phụ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td className="flex justify-center">
                  <img src={item.img || item.photo} alt="" />
                </td>
                <td className="name">{item.name}</td>
                <td className="sub_price">
                  {item.price.toLocaleString("vi-VN")}đ
                </td>
                <td className="quantity">
                  <button onClick={() => btnMinus(item.id)}>-</button>
                  <input type="number" readOnly value={item.quantity} />
                  <button onClick={() => btnPlus(item.id)}>+</button>
                </td>
                <td className="total_price">
                  {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                </td>
                <td
                  className="delete"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <BsFillTrashFill />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Không có sản phẩm nào trong giỏ hàng</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="cart_options">
        <button className="continue_buy">Tiếp tục mua hàng</button>
        <button
          className="delete_allcart"
          onClick={() => dispatch(clearCart())}
        >
          Xóa tất cả
        </button>
      </div>
      <div className="cart_total">
        <div className="title">
          <h3>Tổng giỏ hàng</h3> <div className="breakrum"></div>
        </div>
        <div className="total_price">
          <span>Tổng cộng</span>
          <span>{totalPrice.toLocaleString("vi-VN") || 0}đ</span>
        </div>
        <button onClick={handleCheckout}>Tiến hành thanh toán</button>
      </div>
    </div>
  );
}
