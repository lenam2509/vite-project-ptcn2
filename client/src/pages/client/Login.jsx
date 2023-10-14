import { useState } from "react";
import "../../styles/login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slices/authSlice";
import AxiosConfig from "../../axios/AxiosConfig";
export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [changeForm, setChangeForm] = useState("dangnhap");
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  const onChange = (e) => {
    if (changeForm === "dangnhap") {
      setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    } else {
      setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setDisable(true);
    if (changeForm === "dangnhap") {
      AxiosConfig.post("/api/users/login", {
        email: loginForm.email,
        password: loginForm.password,
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200 || res.status === 201) {
            dispatch(login(res.data));
            toast.success("Đăng nhập thành công", {
              position: toast.POSITION.TOP_CENTER,
            });
            setLoginForm({
              email: "",
              password: "",
            });
            setRegisterForm({
              email: "",
              password: "",
              name: "",
              confirmPassword: "",
            });
            setLoading(false);
            setDisable(false);
            history.push("/userinfo");
          }
        })
        .catch((err) => {
          setLoading(false);
          setDisable(false);
          console.log(err);
          if (err.response) {
            toast.error(err.response.data.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            toast.error(err.message, {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    } else {
      if (registerForm.password !== registerForm.confirmPassword) {
        setLoading(false);
        setDisable(false);
        return toast.error("Mật khẩu không khớp", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      if (
        registerForm.name === "" ||
        registerForm.password === "" ||
        registerForm.email === "" ||
        registerForm.confirmPassword === ""
      ) {
        setLoading(false);
        setDisable(false);
        return toast.error("Vui lòng nhập đầy đủ thông tin", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      AxiosConfig
        .post("/api/users/register", {
          email: registerForm.email,
          password: registerForm.password,
          name: registerForm.name,
        })
        .then((res) => {
          setLoading(false);
          setDisable(false);
          console.log(res);
          if (res.status === 200 || res.status === 201) {
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
              name: "",
              confirmPassword: "",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          setDisable(false);
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
          <button type="submit" disabled={disable} onClick={onSubmit}>
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Đăng nhập"
            )}
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
            name="name"
            onChange={onChange}
            value={registerForm.name}
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
          <button type="submit" disabled={disable} onClick={onSubmit}>
            {loading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              "Đăng ký"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
