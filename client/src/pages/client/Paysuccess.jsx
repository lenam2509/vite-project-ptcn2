import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function Paysuccess() {
  // const { items } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   if (items.length === 0) {
  //     window.location.href = "/products";
  //   }
  // }, []);

  return (
    <div className=" w-full">
      <div className="flex justify-center items-center py-20 ">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-green-400">
            Thanh toán thành công
          </h1>
          <p className="text-gray-500">
            Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi
          </p>
          <Link
            to="/products"
            className="text-blue-500 p-2 rounded-md bg-blue-100 text-2xl "
          >
            Tiếp tục mua hàng {"-->"} 🛒
          </Link>
        </div>
      </div>
    </div>
  );
}
