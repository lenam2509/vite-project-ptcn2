import "../../styles/productdetail.css";
import Product from "../../assets/images/product.jpg";
import { BsCartPlusFill } from "react-icons/bs";
import { Fragment } from "react";
import ProductCard from "../../components/ProductCard";
export default function ProductDetail() {
  return (
    <Fragment>
      <div className="detail_container">
        <div className="detail_imgs">
          <div className="detail_img">
            <img src={Product} alt="" />
          </div>
          <div className="detail_small_img">
            <img src={Product} alt="" />
            <img src={Product} alt="" />
            <img src={Product} alt="" />
          </div>
        </div>

        <div className="detail_content">
          <h1>Trà vải</h1>
          <span className="price">20.000đ</span>
          <p>
            Và trà vải cũng thế nó là một loại trà trái cây tự nhiên có trà, quả
            vải thiều ngâm, mật ong, nước lạnh. Một số nơi còn biến tấu món trà
            này thành trà cùng nước ép trái cây, chiết xuất của quả vải,… để dễ
            uống hơn vưới những người không thích vị đậm của trà.
          </p>
          <div className="detail_quantity">
            <button className="btn_desc">-</button>
            <span>1</span>
            <button className="btn_inc">+</button>
          </div>
          <div className="detail_btn">
            <button>
              Thêm <BsCartPlusFill />
            </button>
          </div>
        </div>
      </div>
      <div className="same_products">
        <div className="title">
          <div className="breakrum"></div>
          <h1>Sản phẩm liên quan</h1>
          <div className="breakrum"></div>
        </div>
        <div className="same_products_container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Fragment>
  );
}
