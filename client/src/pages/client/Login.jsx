import { useState } from "react";
import "../../styles/login.css";
export default function Login() {
  const [changeForm, setChangeForm] = useState("dangnhap");

  const HandleChangeForm = () => {
    if (changeForm === "dangnhap") {
      setChangeForm("dangky");
    } else {
      setChangeForm("dangnhap");
    }
  };
  return (
    <div className="login_container">
      <div className="title">
        <h1
          onClick={HandleChangeForm}
          className={changeForm === "dangnhap" ? "active" : ""}
        >
          Đăng nhập
        </h1>
        <hr />
        <h1
          onClick={HandleChangeForm}
          className={changeForm === "dangky" ? "active" : ""}
        >
          Đăng ký
        </h1>
      </div>
      {changeForm === "dangnhap" ? (
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <button>Đăng nhập</button>
        </form>
      ) : (
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Họ tên" />
          <input type="password" placeholder="Mật khẩu" />
          <input type="password" placeholder="Nhập lại mật khẩu" />
          <button>Đăng ký</button>
        </form>
      )}
    </div>
  );
}
