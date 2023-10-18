import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import "../../styles/productspage.css";
import AxiosConfig from "../../axios/AxiosConfig";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [url, setUrl] = useState(`/api/products?page=1&limit=8`);
  const [prevdisabled, setPrevDisabled] = useState(false);
  const [nextdisabled, setNextDisabled] = useState(false);
  const [sort, setSort] = useState("");
  const [searh, setSearch] = useState("");

  const handelNextPage = () => {
    if (products.products?.length < limit) {
      return setNextDisabled(true);
    }
    setPage(page + 1);
    //  set current api url
    setUrl((prev) => prev.replace(`page=${page}`, `page=${page + 1}`));
  };

  const handlePrevPage = () => {
    if (page === 1) {
      return setPrevDisabled(true);
    }
    setPage(page - 1);
    //  set current api url
    setUrl((prev) => prev.replace(`page=${page}`, `page=${page - 1}`));
  };

  const handleSearch = () => {
    setPage(1);
    if (searh === "") {
      return setUrl(`/api/products?page=${1}&limit=${limit}`);
    }
    setUrl(`/api/products/search?search=${searh}&page=${1}&limit=${limit}`);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setPage(1);
    if (e.target.value === "") {
      return setUrl(`/api/products?page=${1}&limit=${limit}`);
    }
    setUrl(
      `/api/products/category?category=${
        e.target.value
      }&page=${1}&limit=${limit}`
    );
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1);
    console.log(page);
    if (e.target.value === "") {
      return setUrl(`/api/products?page=1&limit=${limit}`);
    }
    if (e.target.value === "hight") {
      return setUrl(`api/products/hight?page=${1}&limit=${limit}`);
    }
    if (e.target.value === "low") {
      return setUrl(`api/products/low?page=${1}&limit=${limit}`);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await AxiosConfig.get(url);

        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page, limit, url]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await AxiosConfig.get("/api/categories");
        setCategories(res.data.categories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="proucts_query">
        <div className="products_selections">
          <p>Thể loại</p>
          <select onChange={handleCategory}>
            <option value={""}>Tất cả</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="products_searcher">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="tìm sản phẩm"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="products_sorter">
          <p>Sắp xếp theo</p>
          <select onChange={handleSortChange}>
            <option value={""}>Mặc định</option>
            <option value="hight">Giá giảm dần</option>
            <option value="low">Giá tăng dần</option>
          </select>
        </div>
      </div>

      <div className="products_container">
        {loading ? (
          <div className="loading loading-spinner loading-lg"></div>
        ) : products.products?.length > 0 ? (
          products.products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              img={product.photo}
              price={product.price}
              id={product._id}
            />
          ))
        ) : (
          <div className="text-2xl font-bold text-center">
            Không có sản phẩm nào
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <div className="join">
          <button
            className="join-item btn"
            disabled={prevdisabled || page === 1}
            onClick={handlePrevPage}
          >
            «
          </button>
          <button className="join-item btn">Trang {page}</button>
          <button
            className="join-item btn"
            disabled={nextdisabled || products.products?.length < limit}
            onClick={handelNextPage}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}
