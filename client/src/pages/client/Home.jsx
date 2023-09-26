import ProductCard from "../../components/ProductCard";
import SlideBaner from "../../components/SlideBaner";
import baner1 from "../../assets/images/baner1.jpg";
import baner3 from "../../assets/images/baner3.jpg";
import {
  GiEmeraldNecklace,
  GiDiamondRing,
  GiCrystalEarrings,
  GiWatch,
} from "react-icons/gi";
import "../../styles/home.css";

export default function Home() {
  return (
    <>
      <SlideBaner />
      <div className="container2">
        <div className="row">
          <GiEmeraldNecklace />
          <h2>Dây chuyền</h2>
          <span>Có tổng cộng 20 sản phẩm này đang được bán trên web</span>
        </div>
        <div className="row">
          <GiDiamondRing />
          <h2>Nhẫn đeo tay</h2>
          <span>Có tổng cộng 20 sản phẩm này đang được bán trên web</span>
        </div>
        <div className="row">
          <GiCrystalEarrings />
          <h2>Bông tai</h2>
          <span>Có tổng cộng 20 sản phẩm này đang được bán trên web</span>
        </div>
        <div className="row">
          <GiWatch />
          <h2>Đồng hồ</h2>
          <span>Có tổng cộng 20 sản phẩm này đang được bán trên web</span>
        </div>
      </div>
      <div className="container3">
        <h1>Danh mục nổi bật</h1>
        <div className="box_container">
          <div className="box">
            <img src={baner1} alt="" />
            <div className="content">Trà sữa</div>
          </div>
          <div className="box">
            <img src={baner1} alt="" />
            <div className="content">Lorem</div>
          </div>
          <div className="box">
            <img src={baner3} alt="" />
            <div className="content">Bánh snack</div>
          </div>
        </div>
      </div>
      <div className="container4">
        <h1>Sản phẩm nổi bật</h1>
        <div className="box_container">
          <ProductCard name={"Dây chuyền trái tim"} price={250000} />
          <ProductCard name={"Dây chuyền trái tim"} price={250000} />
          <ProductCard name={"Dây chuyền trái tim"} price={250000} />
          <ProductCard name={"Dây chuyền trái tim"} price={250000} />
        </div>
      </div>
    </>
  );
}
