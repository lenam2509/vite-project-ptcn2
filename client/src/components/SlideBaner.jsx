import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/slidebaner.css";
// import baner1 from "../assets/images/baner1.jpg";
import baner2 from "../assets/images/baner2.jpg";
import baner5 from "../assets/images/baner5.jpg";
export default function SlideBaner() {
  const images = [baner2, baner5];
  return (
    <Slide autoplay="true">
      {images.map((image, index) => (
        <div key={index} className="each-slide-effect">
          <img src={image} alt="" />
        </div>
      ))}
    </Slide>
  );
}
