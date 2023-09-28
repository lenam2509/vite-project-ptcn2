import { useState } from "react";
import "../../styles/login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
export default function Login() {
  const history = useHistory();
  const [changeForm, setChangeForm] = useState("dangnhap");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    fullname: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    if (changeForm === "dangnhap") {
      setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    } else {
      setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (changeForm === "dangnhap") {
      console.log(loginForm);
      axios
        .post("http://localhost:2509/api/users/login", {
          email: loginForm.email,
          password: loginForm.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success("Đăng nhập thành công", {
              position: toast.POSITION.TOP_CENTER,
            });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.userInfo));
            setLoginForm({
              email: "",
              password: "",
            });
            setRegisterForm({
              email: "",
              password: "",
              fullname: "",
              confirmPassword: "",
            });
            history.push("/userinfo");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } else {
      if (registerForm.password !== registerForm.confirmPassword) {
        return toast.error("Mật khẩu không khớp", {
          position: toast.POSITION.TOP_CENTER,
        });
      }

      axios
        .post("http://localhost:2509/api/users/register", {
          email: registerForm.email,
          password: registerForm.password,
          fullname: registerForm.fullname,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success("Đăng ký thành công", {
              position: toast.POSITION.TOP_CENTER,
            });
            setChangeForm("dangnhap");
            setLoginForm({
              email: registerForm.email,
              password: registerForm.password,
            });
            setRegisterForm({
              email: "",
              password: "",
              fullname: "",
              confirmPassword: "",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

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
          <input
            type="email"
            onChange={onChange}
            placeholder="Email"
            name="email"
            value={loginForm.email}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={onChange}
            name="password"
            value={loginForm.password}
          />
          <button type="submit" onClick={onSubmit}>
            Đăng nhập
          </button>
        </form>
      ) : (
        <form>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={onChange}
            value={registerForm.email}
          />
          <input
            type="text"
            placeholder="Họ tên"
            name="fullname"
            onChange={onChange}
            value={registerForm.fullname}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            name="password"
            onChange={onChange}
            value={registerForm.password}
          />
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            name="confirmPassword"
            onChange={onChange}
            value={registerForm.confirmPassword}
          />
          <button type="submit" onClick={onSubmit}>
            Đăng ký
          </button>
        </form>
      )}
    </div>
  );
}
