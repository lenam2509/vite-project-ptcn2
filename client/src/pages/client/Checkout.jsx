import "../../styles/checkout.css";
import VCBQR from "../../assets/images/bank_qr.jpg";
export default function Checkout() {
  return (
    <div className="checkout_container">
      <div className="customer_info">
        <h1>Thông tin khách hàng</h1>
        <div className="form_group">
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="họ tên khách hàng"
          />
        </div>
        <div className="form_group">
          <label htmlFor="address">Địa chỉ</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="nơi ở, quận, huyện vv..."
          />
        </div>
        <div className="form_group">
          <label htmlFor="phone">Điện thoại</label>
          <input type="text" name="phone" id="phone" placeholder="0XXXXXXXX" />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="@gmail.com" />
        </div>
        <div className="form_group">
          <label htmlFor="note">Ghi chú</label>
          <textarea
            placeholder="ghi chú nếu có"
            name="note"
            id="note"
            cols="10"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="payment_info">
        <h1>Thông tin thanh toán</h1>
        <div className="payment_info_container">
          <div className="payment_row">
            <span className="title">Sản phẩm</span>
            <span className="title">Đơn giá</span>
          </div>
          <div className="payment_row">
            <span className="name">Trà vải x1</span>
            <span className="price">50.000đ</span>
          </div>
          <div className="payment_row">
            <span className="name">Chi phí vận chuyển</span>
            <span className="price">miễn phí</span>
          </div>
          <div className="payment_row">
            <span className="name">Tổng cộng</span>
            <span className="total_price">50.000đ</span>
          </div>
          <div className="notify_checkout">
            <p>Vui lòng kiểm tra kỹ thông tin trước khi đặt hàng</p>
            <span>
              Nếu thanh toán bằng hình thức chuyển khoản thì vui lòng chuyển
              theo số tài khoản này <b>0181003656334(Vietcombank)</b> với nội
              dung là mã đơn hàng, họ tên, số điện thoại hoặc scan mã QR bên
              dưới
            </span>
          </div>
          <div className="scan_qr_checkout">
            <img src={VCBQR} alt="" />
          </div>
          <div className="payment_btns">
            <button className="btn">Thanh toán khi nhận hàng</button>
            <button className="btn">Thanh toàn bằng ngân hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
