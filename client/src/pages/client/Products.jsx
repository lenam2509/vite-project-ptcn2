import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import "../../styles/productspage.css";
import AxiosConfig from "../../axios/AxiosConfig";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [url, setUrl] = useState(`/api/products?page=${page}&limit=${limit}`);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await AxiosConfig.get(url);
        console.log(res);
        setProducts(res.data.products);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="proucts_query">
        <div className="products_selections">
          <p>Thể loại</p>
          <select>
            <option value="all">Tất cả</option>
            <option value="1">Thể loại 1</option>
            <option value="2">Thể loại 2</option>
            <option value="3">Thể loại 3</option>
          </select>
        </div>
        <div className="products_searcher">
          <input type="text" placeholder="tìm sản phẩm" />
          <button>Search</button>
        </div>
        <div className="products_sorter">
          <p>Sắp xếp theo</p>
          <select>
            <option>Mặc định</option>
            <option value="1">Giá tăng dần</option>
            <option value="2">Giá giảm dần</option>
            <option value="3">Tên A-Z</option>
            <option value="4">Tên Z-A</option>
          </select>
        </div>
      </div>

      <div className="products_container">
        {loading ? (
          <div className="loading loading-spinner loading-lg"></div>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              img={product.photo}
              price={product.price}
              id={product._id}
            />
          ))
        )}
      </div>
      
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page {page}</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
}
