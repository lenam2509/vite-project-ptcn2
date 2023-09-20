import ProductCard from "../../components/ProductCard";
import SlideBaner from "../../components/SlideBaner";
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
            <img
              src="https://images.unsplash.com/photo-1694681733456-05c706f280b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="content">Lorem</div>
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1694681733456-05c706f280b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="content">Lorem</div>
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1694681733456-05c706f280b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="content">Lorem</div>
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
