import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login, loginWithGoogle } from "../redux/Slices/authSlice";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import AxiosConfig from "../axios/AxiosConfig";
export default function GoogleLoginBtn() {
  const [payload, setPayload] = useState({
    email: "",
    name: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  //   const handleLoginWithGoogle = () => {
  //     AxiosConfig.post("/api/users/registerWithGoogle", {
  //       email: payload.email,
  //       name: payload.name,
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         if (res.status === 200 || res.status === 201) {
  //           dispatch(login(res.data));
  //           toast.success("Đăng nhập thành công", {
  //             position: toast.POSITION.TOP_CENTER,
  //           });
  //           setPayload({
  //             email: "",
  //             name: "",
  //           });
  //           history.push("/");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         toast.error("Đăng nhập thất bại", {
  //           position: toast.POSITION.TOP_CENTER,
  //         });
  //       });
  //   };

  const onSuccess = (res) => {
    console.log(res);
    const credential = jwt_decode(res.credential);
    console.log(credential);
    const { email, name } = credential;
    setPayload({
      email,
      name,
    });
    AxiosConfig.post("/api/users/registerWithGoogle", {
      email,
      name,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          dispatch(login(res.data));
          toast.success("Đăng nhập thành công", {
            position: toast.POSITION.TOP_CENTER,
          });
          setPayload({
            email: "",
            name: "",
          });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Đăng nhập thất bại", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="mt-5 ">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
}
