import "../../styles/contact.css";
import {
  AiFillPhone,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiTwotoneMail,
} from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";
import SimpleMap from "../../components/GoogleMap";

export default function Contact() {
  return (
    <div className="contact_container">
      <div className="google_map_container">
        <SimpleMap />
      </div>
      <div className="contact_info_form_container">
        <div className="left">
          <div className="left_row">
            <AiFillPhone />
            035501907
          </div>
          <div className="left_row">
            <AiTwotoneMail />
            levietnam2509@gmail.com
          </div>
          <div className="left_row">
            <BsFillGeoAltFill />
            81 ấp 5, Lê Văn Lương, Nhà Bè, Hồ Chí Minh
          </div>
          <div className="media">
            <h3>Theo dõi chúng tôi</h3>
            <div className="media_icons">
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
            </div>
          </div>
        </div>

        <div className="right">
          <form>
            <h1>Liên hệ</h1>
            <div className="form_control">
              <input type="text" placeholder="Họ tên" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form_control">
              <input type="text" placeholder="số điện thoại" />
            </div>
            <div className="form_control">
              <textarea
                name="noidung"
                id=""
                cols="30"
                rows="10"
                placeholder="nội dung"
              />
            </div>
            <button>Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
}
