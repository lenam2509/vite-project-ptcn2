import "../../styles/cart.css";
import { BsFillTrashFill } from "react-icons/bs";
import Product from "../../assets/images/product.jpg";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
export default function Cart() {
  const history = useHistory();

  const handleCheckout = () => {
    history.push("/checkout");
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
          <tr>
            <td>
              <img src={Product} alt="" />
            </td>
            <td className="name">Trà vải</td>
            <td className="sub_price">50.000đ</td>
            <td className="quantity">
              <button>-</button>
              <input type="text" value="1" />
              <button>+</button>
            </td>
            <td className="total_price">50.000đ</td>
            <td className="delete">
              <BsFillTrashFill />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="cart_options">
        <button className="continue_buy">Tiếp tục mua hàng</button>
        <button className="delete_allcart">Xóa tất cả</button>
      </div>
      <div className="cart_total">
        <div className="title">
          <h3>Tổng giỏ hàng</h3> <div className="breakrum"></div>
        </div>
        <div className="total_price">
          <span>Tổng cộng</span>
          <span>50.000đ</span>
        </div>
        <button onClick={handleCheckout}>Tiến hành thanh toán</button>
      </div>
    </div>
  );
}
