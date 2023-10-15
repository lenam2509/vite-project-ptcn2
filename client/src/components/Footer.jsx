import "../styles/footer.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_item">
          <h3>Giới thiệu</h3>
          <hr />
          <p>Câu chuyện J&6</p>
          <p>
            Website bán trang sức J&6 được thành lập vào năm 2023 bởi 6 thành
            viên
          </p>
          <p>Địa chỉ: 81 ấp 5, Lê Văn Lương, Nhà Bè</p>
          <p>Hotline: 035501907</p>
          <p>Email: levietnam2509@gmail.com</p>
          <p className="fotter_media">
            <AiFillFacebook />
            <AiFillInstagram />
            <FaTiktok />
          </p>
        </div>
        <div className="footer_item">
          <h3>Thông tin & Chính Sách</h3>
          <hr />
          <p>Thông tin về chúng tôi</p>
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
