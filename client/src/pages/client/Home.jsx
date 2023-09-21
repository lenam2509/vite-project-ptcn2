import ProductCard from "../../components/ProductCard";
import SlideBaner from "../../components/SlideBaner";
import baner1 from "../../assets/images/baner1.jpg";
import baner3 from "../../assets/images/baner3.jpg";
import "../../styles/home.css";

export default function Home() {
  return (
    <>
      <SlideBaner />
      <div className="container2">
        <div className="row">
          <h1>Logo</h1>
          <h2>Lorem Ipsum</h2>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="row">
          <h1>Logo</h1>
          <h2>Lorem Ipsum</h2>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="row">
          <h1>Logo</h1>
          <h2>Lorem Ipsum</h2>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="row">
          <h1>Logo</h1>
          <h2>Lorem Ipsum</h2>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
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
          <ProductCard name={"Trà vải"} price={50000} />
          <ProductCard name={"Trà vải"} price={50000} />
          <ProductCard name={"Trà vải"} price={50000} />
          <ProductCard name={"Trà vải"} price={50000} />
        </div>
      </div>
    </>
  );
}
