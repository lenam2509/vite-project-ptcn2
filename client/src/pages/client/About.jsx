import "../../styles/about.css";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about2.jpg";
import About3 from "../../assets/images/about3.jpg";
export default function About() {
  return (
    <div className="about_container">
      <h4>Giới thiệu</h4>
      <h1>Chào mừng tới Food Station</h1>
      <div className="breakrum"></div>
      <div className="about_box">
        <p>
          Hơn 10 năm hình thành và phát triển, thương hiệu thực phẩm chay “Poly
          Food” đã khẳng định được uy tín của mình trên thị trường với đa dạng
          mặt hàng, chất lượng dịch vụ, chất lượng sản phẩm. Chúng tôi luôn
          hướng tới sức khỏe người tiêu dùng luôn được đặt lên hàng đầu, cam kết
          sản phẩm đưa ra luôn được đảm bảo, uy tín, nguồn gốc xuất xứ rõ ràng,
          giấy tờ pháp lý đầy đủ, không chất phụ gia, không chất bảo quản, được
          sản xuất sạch sẽ, vệ sinh an toàn thực phẩm, đảm bảo sức khỏe người
          tiêu dùng. Điều đó làm nên thương hiệu “Poly Food” chúng tôi ngày hôm
          nay. Chúng tôi luôn cố gắng để phục vụ tốt nhất đến quý khách hàng.
        </p>
      </div>
      <div className="about_box2">
        <div className="box">
          <div className="box_img">
            <img src={About1} alt="" />
          </div>
          <h2>Uy tín</h2>
          <p>
            Uy tín là điều Poly Food đã gây dựng và khẳng định được trong gần 10
            năm qua. Chúng tôi sẽ tiếp tục giữ vững giá trị kinh doanh cốt lõi
            này trong suốt chặng đường phía trước để phát triển bền vững.
          </p>
        </div>
        <div className="box">
          <div className="box_img">
            <img src={About2} alt="" />
          </div>
          <h2>Đồng Hành</h2>
          <p>
            Đồng hành là cam kết và cũng là giá trị nổi bật của Poly Food. Chúng
            tôi đồng hành cùng nhà cung cấp, đồng hành cùng khách hàng và đồng
            hành cùng khách hàng của khách hàng.
          </p>
        </div>
        <div className="box">
          <div className="box_img">
            <img src={About3} alt="" />
          </div>
          <h2>Trách Nhiệm</h2>
          <p>
            Trách nhiệm là nền tảng tạo nên chất lượng của sản phẩm & dịch vụ
            của Poly Food, từ đó mới khiến khách hàng hài lòng và gắn bó lâu
            dài.
          </p>
        </div>
      </div>
    </div>
  );
}
