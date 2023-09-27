import ProductCard from "../../components/ProductCard";
import SlideBaner from "../../components/SlideBaner";
import baner1 from "../../assets/images/baner1.jpg";
import baner3 from "../../assets/images/baner3.jpg";
import baner4 from "../../assets/images/baner4.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  GiEmeraldNecklace,
  GiDiamondRing,
  GiCrystalEarrings,
  GiWatch,
} from "react-icons/gi";

import "../../styles/home.css";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
            <img src={baner4} alt="" />
            <div className="content">Dây chuyền</div>
          </div>
          <div className="box">
            <img src={baner1} alt="" />
            <div className="content">Combo</div>
          </div>
          <div className="box">
            <img src={baner3} alt="" />
            <div className="content">Nhẫn đeo tay</div>
          </div>
        </div>
      </div>
      <div className="container4">
        <h1>Sản phẩm nổi bật</h1>
        <div className="box_container">
          <Carousel responsive={responsive} infinite={true} autoPlay>
            <ProductCard name={"Dây chuyền trái tim"} price={250000} />
            <ProductCard name={"Dây chuyền trái tim"} price={250000} />
            <ProductCard name={"Dây chuyền trái tim"} price={250000} />
            <ProductCard name={"Dây chuyền trái tim"} price={250000} />
            <ProductCard name={"Dây chuyền trái tim"} price={250000} />
            <ProductCard name={"Dây chuyền trái tim"} price={250000} />
            <ProductCard name={"Dây chuyền trái tim"} price={250000} />
          </Carousel>
        </div>
      </div>
    </>
  );
}
