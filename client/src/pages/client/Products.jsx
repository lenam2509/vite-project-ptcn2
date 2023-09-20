import ProductCard from "../../components/ProductCard";
import "../../styles/productspage.css";
export default function Products() {
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
            <option value="1">Giá tăng dần</option>
            <option value="2">Giá giảm dần</option>
            <option value="3">Tên A-Z</option>
            <option value="4">Tên Z-A</option>
          </select>
        </div>
      </div>

      {/* <div className="products_selections">
        <div className="products_selections_item">
          <p>Thể loại</p>
          <select>
            <option value="all">Tất cả</option>
            <option value="1">Thể loại 1</option>
            <option value="2">Thể loại 2</option>
            <option value="3">Thể loại 3</option>
          </select>
        </div>
      </div> */}
      <div className="products_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
