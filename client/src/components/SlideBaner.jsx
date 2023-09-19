import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/slidebaner.css";
export default function SlideBaner() {
  const images = [
    "https://images.unsplash.com/photo-1694505396696-b093cca3d8ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1694743017017-25be54753288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <Slide autoplay duration={2000}>
      {/* <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div> */}
      {images.map((image, index) => (
        <div key={index} className="each-slide-effect">
          <img src={image} alt="" />
        </div>
      ))}
    </Slide>
  );
}
