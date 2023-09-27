import React, { useState } from "react";
import Image from "../../assets/images/product.jpg";
export default function Products() {
  const [arrays, setArrays] = useState(Array.from({ length: 10 }));

  return (
    <div>
      <button
        className="btn btn-primary mb-4"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Thêm sản phẩm
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-center text-lg">Thêm sản phẩm mới</h3>
          <div className="py-4 flex flex-col max-w-xs mx-auto gap-4">
            <input
              type="text"
              placeholder="Tên sản phẩm"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Giá sản phẩm"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <textarea
              className="textarea textarea-primary"
              placeholder="Thông tin sản phẩm"
            ></textarea>
            <select className="select select-primary w-full max-w-xs">
              <option disabled selected>
                Loại sản phẩm
              </option>
              <option>Dây chuyền</option>
              <option>Nhẫn đeo tay</option>
              <option>Bông tai</option>
              <option>Đồng hồ</option>
            </select>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sản phẩm nổi bật ?</span>
                <input type="checkbox" className="toggle" />
              </label>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>
          <div className="modal-action">
            <button className="btn btn-success">Save</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto">
        <table className="table table-md">
          {/* head */}
          <thead className="bg-slate-200 text-base">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {arrays.map((item, index) => (
              <tr key={index} className="hover">
                <td>{index + 1}</td>
                <td>
                  <img src={Image} className="w-[100px] h-[100px]" alt="" />
                </td>
                <td>John</td>
                <td>Developer</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <p>Có tổng cộng {arrays.length} sản phẩm </p>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
