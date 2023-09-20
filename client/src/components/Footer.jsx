import "../styles/footer.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_item">
          <h3>Giới thiệu</h3>
          <hr />
          <p>Website made by lenam2509</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            praesentium aliquid architecto incidunt tempore nesciunt atque!
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
        <p>© 2021 - Bản quyền thuộc về lenam2509</p>
      </div>
    </footer>
  );
}
