import { useEffect, useState } from "react";
import AxiosConfig from "../../axios/AxiosConfig";
import { toast } from "react-toastify";

export default function Cate() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [reRender, setReRender] = useState(false);

  const HandleSave = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await AxiosConfig.post("/api/categories", { name });
      //   console.log(res);
      setLoading(false);
      toast.success("Thêm loại sản phẩm thành công", {
        position: toast.POSITION.TOP_CENTER,
      });
      setName("");
      document.getElementById("my_modal_1").close();
      setReRender(!reRender);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await AxiosConfig.get("/api/categories");
      //   console.log(res);
      setCategories(res.data.categories);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const removeCate = async (id) => {
    try {
      setLoading(true);
      const res = await AxiosConfig.delete(`/api/categories/${id}`);
      //   console.log(res);
      setLoading(false);
      toast.success("Xóa loại sản phẩm thành công", {
        position: toast.POSITION.TOP_CENTER,
      });
      setReRender(!reRender);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleOpenEditModal = (id) => {
    document.getElementById("my_modal_2").showModal();
    const cate = categories.find((cate) => cate._id === id);
    if (cate) {
      setName(cate.name);
    } else {
      setName("");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [reRender]);

  return (
    <>
      <button
        className="btn btn-primary mb-4"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Thêm loại sản phẩm
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thêm loại sản phẩm</h3>
          <div className="py-4">
            <input
              type="text"
              placeholder="Tên"
              className="input input-primary input-bordered w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="modal-action">
            <button
              className="btn btn-accent"
              onClick={HandleSave}
              disabled={loading}
            >
              Save
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sửa loại sản phẩm</h3>
          <div className="py-4">
            <input
              type="text"
              placeholder="Tên"
              className="input input-primary input-bordered w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="modal-action">
            <button
              className="btn btn-accent"
              //   onClick={HandleSave}
              disabled={loading}
            >
              Save
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error" onClick={() => setName("")}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="container">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-slate-200 text-base">
              <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Ngày tạo</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {categories.map((cate, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cate.name}</td>
                  <td>{new Date(cate.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      className="btn btn-warning mr-2"
                      onClick={() => handleOpenEditModal(cate._id)}
                    >
                      Sửa
                    </button>

                    <button
                      className="btn btn-error"
                      onClick={() => removeCate(cate._id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
