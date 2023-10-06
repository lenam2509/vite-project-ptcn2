import { useEffect, useRef, useState } from "react";
import Image from "../../assets/images/product.jpg";
import AxiosConfig from "../../axios/AxiosConfig";
import { toast } from "react-toastify";
export default function Products() {
  const [arrays, setArrays] = useState(Array.from({ length: 5 }));
  const [category, setCategory] = useState([]);
  const [reloadPage, setreloadPage] = useState(false);
  const fileInputRef = useRef(null);
  const [loading, setloading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    category: "",
    photo: "",
    hot: false,
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.checked });
  };
  const handleImageChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.files[0] });
  };

  const handleSubmitAddProduct = async (e) => {
    console.log(payload);
    setloading(true);
    if (
      payload.name === "" ||
      payload.price === "" ||
      payload.quantity === "" ||
      payload.description === "" ||
      payload.category === "" ||
      payload.photo === ""
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      setloading(false);
      return;
    } else {
      try {
        const formData = new FormData();
        formData.append("name", payload.name);
        formData.append("price", payload.price);
        formData.append("quantity", payload.quantity);
        formData.append("description", payload.description);
        formData.append("category", payload.category);
        formData.append("photo", payload.photo);
        formData.append("hot", payload.hot);
        const res = await AxiosConfig.post("/api/products", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res);
        if (res.status === 200 || 201) {
          document.getElementById("my_modal_1").close();
          setPayload({
            name: "",
            price: "",
            quantity: "",
            description: "",
            category: "",
            hot: false,
          });
          fileInputRef.current.value = "";
          toast.success("Thêm sản phẩm thành công");
          setreloadPage(!reloadPage);
          setloading(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Thêm sản phẩm thất bại");
        setreloadPage(!reloadPage);
        setloading(false);
      }
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await AxiosConfig.get("/api/categories");
        setCategory(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    };

    const getProducts = async () => {
      try {
        setloading(true);
        const res = await AxiosConfig.get("/api/products");
        if (res.status === 200 || 201) {
          setArrays(res.data.products);
          setloading(false);
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
    getCategories();
  }, []);

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
              onChange={handleChange}
              name="name"
              value={payload.name}
            />
            <input
              type="number"
              placeholder="Giá sản phẩm"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleChange}
              name="price"
              value={payload.price}
            />
            <input
              type="number"
              placeholder="Số lượng "
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleChange}
              name="quantity"
              value={payload.quantity}
            />
            <textarea
              className="textarea textarea-primary"
              placeholder="Thông tin sản phẩm"
              onChange={handleChange}
              name="description"
              value={payload.description}
            ></textarea>
            <select
              className="select select-primary w-full max-w-xs"
              onChange={handleChange}
              name="category"
              value={payload.category}
            >
              <option value={""} disabled>
                Loại sản phẩm
              </option>
              {category.map((item, index) => (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sản phẩm nổi bật ?</span>
                <input
                  type="checkbox"
                  className="toggle"
                  onChange={handleCheckbox}
                  name="hot"
                  value={payload.hot}
                />
              </label>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              onChange={handleImageChange}
              name="photo"
              ref={fileInputRef}
            />
          </div>
          <div className="modal-action">
            <button
              className={`btn btn-success ${
                loading ? "loading loading-spinner loading-md" : ""
              }`}
              onClick={handleSubmitAddProduct}
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

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-md border border-b-2">
          {/* head */}
          <thead className="bg-slate-200 text-base">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Hot</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center">
                  <div className="loading loading-spinner loading-lg"></div>
                </td>
              </tr>
            ) : (
              arrays.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={Image} alt="" className="w-20 h-20" />
                  </td>
                  <td>{item?.name}</td>
                  <td>{(item?.price).toLocaleString("vi-VN")}đ</td>
                  <td>{item?.category.name}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.hot ? "true" : "false"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="flex items-center mt-4">
          <div className="flex-[2]">Có tổng cộng {arrays.length} sản phẩm</div>
          <div className="join flex-[2]">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 22</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
}
