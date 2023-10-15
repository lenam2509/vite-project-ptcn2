import { AiFillEye, AiFillEdit } from "react-icons/ai";
import AxiosConfig from "../../axios/AxiosConfig";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Bills() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bill, setBill] = useState({});
  const [payload, setPayload] = useState({
    status: "",
    note: "",
  });
  const [reload, setReload] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const handleViewBill = (id) => {
    const getBill = async () => {
      const res = await AxiosConfig.get(`/api/bills/${id}`);
      console.log(res.data);
      setBill(res.data.bill);
    };
    getBill();
    document.getElementById("my_modal_1").showModal();
  };

  const handleEditBill = (id) => {
    const getBill = async () => {
      const res = await AxiosConfig.get(`/api/bills/${id}`);
      console.log(res.data);
      setBill(res.data.bill);
      setPayload({
        ...payload,
        status: res.data.bill.status,
        note: res.data.bill.note,
      });
    };
    getBill();
    document.getElementById("my_modal_2").showModal();
  };

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await AxiosConfig.put(`/api/bills/${bill._id}`, payload);
    console.log(res.data);
    document.getElementById("my_modal_2").close();
    toast.success("Cập nhật thành công");
    setReload(!reload);
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
    console.log(page);
  };
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    console.log(page);
  };

  useEffect(() => {
    const getBills = async () => {
      setLoading(true);
      const res = await AxiosConfig.get(`/api/bills?page=${page}&limit=5`);
      setBills(res.data.bills);
      setTotal(res.data.totalBills);
      setTotalPage(res.data.totalPages);
      setLoading(false);
      console.log(bills);
    };
    getBills();
  }, [reload, page]);

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-left ">Thông tin khách hàng</h3>
          <hr className="w-full" />
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-base">Họ tên</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs input-secondary"
              readOnly
              value={bill.name}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-base">Số điện thoại</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              readOnly
              className="input input-bordered w-full max-w-xs input-secondary"
              value={bill.phone}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-base">Địa chỉ</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              readOnly
              className="input input-bordered w-full max-w-xs input-secondary"
              value={bill.address}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-base">Quận / Huyện</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs input-secondary"
              readOnly
              value={bill.cityDistricts}
            />
          </div>
          <hr className="w-full mt-2" />
          <h3 className="font-bold text-lg text-left mt-2">
            Thông tin sản phẩm
          </h3>
          <div>
            {bill.products?.map((product, index) => (
              <div key={index}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-base">Tên sản phẩm</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    readOnly
                    className="input input-bordered w-full max-w-xs input-secondary"
                    value={product.product?.name}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-base">Số lượng</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    readOnly
                    className="input input-bordered w-full max-w-xs input-secondary"
                    value={product.quantity}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-base">Giá</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    readOnly
                    className="input input-bordered w-full max-w-xs input-secondary"
                    value={product.product?.price.toLocaleString("vi-VN") + "đ"}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-base">Hình ảnh</span>
                  </label>
                  <img
                    src={product.product?.photo}
                    alt=""
                    className="w-[150px] h-[150px] object-cover"
                  />
                </div>
                <hr className="w-full mt-2" />
              </div>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-left">Cập nhật hóa đơn</h3>
          <select
            name="status"
            className="select select-primary w-full max-w-xs my-4"
            onChange={handleChange}
            value={payload.status}
          >
            {bill.status === "Pending" && (
              <option value="Pending" hidden selected>
                Đang chờ duyệt
              </option>
            )}
            {bill.status === "Processing" && (
              <option value="Processing" hidden selected>
                Đang xử lý
              </option>
            )}
            {bill.status === "Delivered" && (
              <option value="Delivered" hidden selected>
                Đang giao hàng
              </option>
            )}
            {bill.status === "Cancelled" && (
              <option value="Cancelled" hidden selected>
                Đã hủy
              </option>
            )}
            {bill.status === "Completed" && (
              <option value="Completed" hidden selected>
                Đã nhận hàng
              </option>
            )}
            <option value="Pending">Đang chờ duyệt</option>
            <option value="Processing">Đang xử lý</option>
            <option value="Delivered">Đang giao hàng</option>
            <option value="Cancelled">Đã hủy</option>
            <option value="Completed">Đã nhận hàng</option>
          </select>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Ghi chú</span>
            </label>
            <textarea
              type="text"
              name="note"
              placeholder="Type here"
              className="textarea textarea-primary w-full max-w-xs"
              onChange={handleChange}
              value={payload.note}
            />
          </div>
          <hr className="w-full mt-2" />
          <button className="btn btn-success" onClick={handleSubmit}>
            Cập nhật
          </button>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto">
        <table className="table border border-slate-200 rounded">
          {/* head */}
          <thead className="bg-slate-200 text-base text-center">
            <tr>
              <th>#</th>
              <th>Mã hóa đơn</th>
              <th>Khách hàng</th>
              <th>Sản phẩm</th>
              <th>Tổng tiền</th>
              <th>Thanh toán</th>
              <th>Trạng thái</th>
              <th>Ghi chú</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {loading ? (
              <tr>
                <td colSpan="9">
                  <div className="loading loading-spinner loading-md"></div>
                </td>
              </tr>
            ) : (
              bills.map((bill, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{bill.billId}</td>
                    <td>{bill.user.name}</td>
                    <td className="">
                      {bill.products.map((product, index) => (
                        <p key={index}>
                          {product.product?.name} x{product?.quantity}
                        </p>
                      ))}
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
                    <td className="flex gap-2 justify-center">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleViewBill(bill._id)}
                      >
                        <AiFillEye />
                      </button>

                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleEditBill(bill._id)}
                      >
                        <AiFillEdit />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex mt-5 items-center">
        <div className="">
          <p>Có tổng cộng {total} hóa đơn</p>
          <p>Có tổng cộng {totalPage} trang</p>
        </div>
        <div className="join m-auto">
          <button className="join-item btn" onClick={handlePrevPage}>
            «
          </button>
          <button className="join-item btn">Page {page}</button>
          <button className="join-item btn" onClick={handleNextPage}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}
