import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/slidebaner.css";
// import baner1 from "../assets/images/baner1.jpg";
import baner2 from "../assets/images/baner2.jpg";
import baner5 from "../assets/images/baner5.jpg";
// import small_baner1 from "../assets/images/small_logo1.jpg";
// import small_baner2 from "../assets/images/small_logo2.jpg";

export default function SlideBaner() {
  const images = [baner5, baner2];
  // const small_images = [small_baner1, small_baner2];
  // // check if the screen is small
  // const isSmallScreen = window.matchMedia("(max-width: 700px)").matches;
  // if (isSmallScreen) {
  //   return (
  //     <Slide autoplay="true">
  //       {small_images.map((image, index) => (
  //         <div key={index} className="each-slide-effect">
  //           <img src={image} alt="" />
  //         </div>
  //       ))}
  //     </Slide>
  //   );
  // }
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
