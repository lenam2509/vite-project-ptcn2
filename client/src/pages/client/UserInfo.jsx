import Member from "../../assets/images/member1.jpg";
import { useSelector } from "react-redux";

export default function UserInfo() {
  const { data } = useSelector((state) => state.auth);

  return (
    <div className=" max-w-[1000px] mx-auto bg-slate-100 mt-5 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Thông Tin Khách Hàng</h1>
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
          value={data?.userInfo.fullname || ""}
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
          value={data?.userInfo.email || ""}
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
          value={data?.userInfo.phone || ""}
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
          value={data?.userInfo.address || ""}
          readOnly
        />
      </div>
      <button className="btn btn-neutral mt-5">Cập nhật thông tin</button>
    </div>
  );
}
