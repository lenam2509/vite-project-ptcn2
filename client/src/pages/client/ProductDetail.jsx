import "../../styles/productdetail.css";
import Product from "../../assets/images/product.jpg";
import { BsCartPlusFill } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AxiosConfig from "../../axios/AxiosConfig";
import Carousel from "react-multi-carousel";
import { useDispatch } from "react-redux";
import { addItemWithQuantity } from "../../redux/Slices/cartSlice";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
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

  const addToCart = () => {
    dispatch(addItemWithQuantity({ ...product, quantity }));
    toast.success("Thêm vào giỏ hàng thành công");
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await AxiosConfig.get(`/api/products/${id}`);
        console.log(res);
        setProduct(res.data.product);
        setRelatedProducts(res.data.relatedProducts);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <Fragment>
      <div className="detail_container">
        <div className="detail_imgs">
          <div className="detail_img">
            <img src={product.photo} alt="" />
          </div>
          <div className="detail_small_img">
            <img src={product.photo} alt="" />
            <img src={product.photo} alt="" />
            <img src={product.photo} alt="" />
          </div>
        </div>

        <div className="detail_content">
          <h1>{product.name}</h1>
          <span className="price">
            {product.price?.toLocaleString("vi-VN")}đ
          </span>
          <p>{product.description}</p>
          <div className="detail_quantity">
            <button className="btn_desc" onClick={minusQuantity}>
              -
            </button>
            <span>{quantity}</span>
            <button className="btn_inc" onClick={plusQuantity}>
              +
            </button>
          </div>
          <div className="detail_btn">
            <button className="flex gap-1 items-center" onClick={addToCart}>
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
          <Carousel
            className=""
            responsive={responsive}
            infinite
          >
            {relatedProducts.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                price={product.price}
                img={product.photo}
                id={product._id}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
}
