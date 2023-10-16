import "../styles/footer.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_item">
          <h3>Giới thiệu</h3>
          <hr />
          <Link to="/about">Thông tin về chúng tôi</Link>
          <p>Địa chỉ: 81 ấp 5, Lê Văn Lương, Nhà Bè</p>
          <p>Hotline: 035501907</p>
          <p>Email: j&6team@gmail.com</p>
          <p className="fotter_media">
            <AiFillFacebook />
            <AiFillInstagram />
            <FaTiktok />
          </p>
        </div>
        <div className="footer_item">
          <h3>Thông tin & Chính Sách</h3>
          <hr />
          <p>Chính sách bảo hành</p>
          <p>Chính sách bảo mật</p>
          <p>Chính sách vận chuyển</p>
        </div>
      </div>
      <div className="fotter_coppyright">
        <img src={logo} alt="" width={"100px"} height={"100px"} />
        <p>© 2021 - Bản quyền thuộc về J&6 TEAM</p>
      </div>
    </footer>
  );
}
