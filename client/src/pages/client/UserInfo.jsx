import { useEffect, useState } from "react";
import Member from "../../assets/images/member1.jpg";
import { useDispatch, useSelector } from "react-redux";
import AxiosConfig from "../../axios/AxiosConfig";
import { update } from "../../redux/Slices/authSlice";
export default function UserInfo() {
  const { data } = useSelector((state) => state.auth);
  const [bills, setBills] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserBills = async () => {
      try {
        const res = await AxiosConfig.get(`/api/users/${data.id || data._id}`);
        console.log(res.data);
        setBills(res.data.bills);
      } catch (error) {
        console.log(error);
      }
    };
    getUserBills();
  }, []);

  return (
    <div className=" max-w-[1000px] mx-auto bg-slate-100 mt-5 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold uppercase">Thông Tin Khách Hàng</h1>
      <div className="w-[100px] h-[100px] mt-5">
        <img src={Member} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Họ tên</span>
        </label>
        <input
          type="text"
          placeholder="chưa có"
          className="input input-bordered w-full max-w-xs"
          value={data?.name || ""}
          readOnly
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="chưa có"
          className="input input-bordered w-full max-w-xs"
          value={data?.email || ""}
          readOnly
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Số điện thoại</span>
        </label>
        <input
          type="text"
          placeholder="chưa có"
          className="input input-bordered w-full max-w-xs"
          value={data?.phone || ""}
          readOnly
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Địa chỉ</span>
        </label>
        <input
          type="text"
          placeholder="chưa có"
          className="input input-bordered w-full max-w-xs"
          value={data?.address || ""}
          readOnly
        />
      </div>
      <button className="btn btn-neutral mt-5">Cập nhật thông tin</button>
      {data.role === "admin" && (
        <a href="/admin" className="btn btn-accent mt-5">
          Vào trang quản trị
        </a>
      )}

      {/* hóa đơn */}
      <h1 className="text-2xl font-bold mt-5 uppercase ">Thông tin hóa đơn</h1>
      {bills.length > 0 ? (
        <div className="overflow-x-auto my-4 border-black border rounded-md">
          <table className="table">
            {/* head */}
            <thead className="bg-purple-500 font-bold text-sm text-center text-white">
              <tr>
                <th>Mã đơn hàng</th>
                <th>Sản phẩm</th>
                <th>Tổng tiền</th>
                <th>Phương thức thanh toán</th>
                <th>Trạng thái</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white text-center">
              {/* row 1 */}
              {bills.map((bill) => {
                return (
                  <tr key={bill._id}>
                    <td>{bill.billId}</td>
                    <td className="flex flex-col">
                      {bill.products.map((product) => {
                        return (
                          <p key={product._id}>
                            {product.product?.name} x {product?.quantity}
                          </p>
                        );
                      })}
                    </td>
                    <td>{bill.total.toLocaleString("vi-VN")}đ</td>
                    <td>
                      {bill.paymentMethod === "COD"
                        ? "Tiền mặt"
                        : "Chuyển khoản"}
                    </td>
                    <td>
                      {bill.status === "Pending" && "đang chờ duyệt"}
                      {bill.status === "Processing" && "đang xử lý"}
                      {bill.status === "Delivered" && "đang giao hàng"}
                      {bill.status === "Cancelled" && "đã hủy"}
                      {bill.status === "Completed" && "đã nhận hàng"}
                    </td>
                    <td>{bill.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl font-bold text-center mt-5">
          Bạn chưa có hóa đơn nào
        </p>
      )}
    </div>
  );
}
