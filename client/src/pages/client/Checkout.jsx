import "../../styles/checkout.css";
import VCBQR from "../../assets/images/bank_qr.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AxiosConfig from "../../axios/AxiosConfig";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../../redux/Slices/cartSlice";
import { update } from "../../redux/Slices/authSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data } = useSelector((state) => state.auth);
  const { items, totalPrice } = useSelector((state) => state.cart);
  const [payload, setPayload] = useState({
    name: data.name || "",
    address: data.address || "",
    phone: data.phone || "",
    email: data.email || "",
    note: "",
    cityDistricts: "",
  });

  const cityDistricts = [
    { id: 1, name: "Thành phố Thủ Đức" },
    { id: 2, name: "Quận 1" },
    { id: 3, name: "Quận 3" },
    { id: 4, name: "Quận 4" },
    { id: 5, name: "Quận 5" },
    { id: 6, name: "Quận 6" },
    { id: 7, name: "Quận 7" },
    { id: 8, name: "Quận 8" },
    { id: 9, name: "Quận 10" },
    { id: 10, name: "Quận 11" },
    { id: 11, name: "Quận 12" },
    { id: 12, name: "Quận Bình Tân" },
    { id: 13, name: "Quận Bình Thạnh" },
    { id: 14, name: "Quận Gò Vấp" },
    { id: 15, name: "Quận Phú Nhuận" },
    { id: 16, name: "Quận Tân Bình" },
    { id: 17, name: "Quận Tân Phú" },
    { id: 18, name: "Huyện Bình Chánh" },
    { id: 19, name: "Huyện Cần Giờ" },
    { id: 20, name: "Huyện Củ Chi" },
    { id: 21, name: "Huyện Hóc Môn" },
    { id: 22, name: "Huyện Nhà Bè" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmitCOD = async () => {
    console.log(payload);
    const { name, address, phone, email, note, cityDistricts } = payload;
    const body = {
      user: data._id || data.id,
      products: items.map((item) => {
        return {
          product: item.id,
          quantity: item.quantity,
        };
      }),
      paymentMethod: "COD",
      name,
      address,
      phone,
      email,
      note,
      cityDistricts,
      total: totalPrice + 30000,
    };
    if (
      body.name === "" ||
      body.address === "" ||
      body.phone === "" ||
      body.email === "" ||
      body.cityDistricts === ""
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    try {
      const res = await AxiosConfig.post("/api/bills", body);
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        toast.success("Đặt hàng thành công", {
          position: toast.POSITION.TOP_CENTER,
        });
        history.push("/userinfo");
        dispatch(clearCart());
        dispatch(
          update({
            ...data,
            address: body.address,
            phone: body.phone,
          })
        );
      } else {
        toast.error("Đặt hàng thất bại");
      }
    } catch (error) {
      console.log(error);
      toast.error("Đặt hàng thất bại");
    }
  };

  const handleSubmitBank = async () => {
    console.log(payload);
    const { name, address, phone, email, note, cityDistricts } = payload;
    const body = {
      user: data._id || data.id,
      products: items.map((item) => {
        return {
          product: item.id,
          quantity: item.quantity,
        };
      }),
      paymentMethod: "Bank",
      name,
      address,
      phone,
      email,
      note,
      cityDistricts,
      total: totalPrice + 30000,
      // bankCode: null,
      // language: "vn",
    };
    if (
      body.name === "" ||
      body.address === "" ||
      body.phone === "" ||
      body.email === "" ||
      body.cityDistricts === ""
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    try {
      const res = await AxiosConfig.post("/api/bills/banks", body);
      // console.log(res);
      if (res.status === 200 || res.status === 201) {
        toast.success("Đặt hàng thành công", {
          position: toast.POSITION.TOP_CENTER,
        });
        const { data } = res;
        dispatch(clearCart());
        console.log(data);
        // dispatch(
        //   update({
        //     ...data,
        //     address: body.address,
        //     phone: body.phone,
        //   })
        // );
        window.location.href = data.order_url;
      } else {
        toast.error("Đặt hàng thất bại");
      }
    } catch (error) {
      console.log(error);
      toast.error("Đặt hàng thất bại");
    }
  };

  return (
    <div className="checkout_container">
      <div className="customer_info">
        <h1>Thông tin khách hàng</h1>
        <div className="form_group">
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            id="name"
            value={payload.name}
            placeholder={"Nhập họ tên của bạn"}
          />
        </div>
        <div className="form_group">
          <label htmlFor="address">Địa chỉ</label>
          <select onChange={handleChange} name="cityDistricts">
            <option>Quận/Huyện</option>
            {cityDistricts.map((cityDistrict) => (
              <option key={cityDistrict.id} value={cityDistrict.name}>
                {cityDistrict.name}
              </option>
            ))}
          </select>
          <input
            onChange={handleChange}
            type="text"
            name="address"
            id="address"
            value={payload.address}
            placeholder=" ghi rõ nơi ở, quận, huyện vv..."
          />
        </div>
        <div className="form_group">
          <label htmlFor="phone">Điện thoại</label>
          <input
            type="text"
            onChange={handleChange}
            name="phone"
            id="phone"
            placeholder="0XXXXXXXX"
            value={payload.phone}
          />
        </div>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            id="email"
            placeholder={"Nhập email của bạn"}
            value={payload.email}
          />
        </div>
        <div className="form_group">
          <label htmlFor="note">Ghi chú</label>
          <textarea
            placeholder="ghi chú nếu có"
            name="note"
            id="note"
            cols="10"
            rows="5"
            onChange={handleChange}
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
          <div className="payment_row flex-col ">
            {items.map((item) => (
              <div className="product_info" key={item.id}>
                <span className="name">
                  {item.name} x{item.quantity}
                </span>
                <span className="price">
                  {item.price.toLocaleString("vi-VN")}đ
                </span>
              </div>
            ))}
          </div>
          <div className="payment_row">
            <span className="name">Chi phí vận chuyển</span>
            <span className="price">30.000đ</span>
          </div>
          <div className="payment_row">
            <span className="name">Tổng cộng</span>
            <span className="total_price">
              {(totalPrice + 30000).toLocaleString("vi-VN")}đ
            </span>
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
            <button className="btn" onClick={handleSubmitCOD}>
              Thanh toán khi nhận hàng
            </button>
            <button className="btn" onClick={handleSubmitBank}>
              Thanh toán bằng ngân hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
