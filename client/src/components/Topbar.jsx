import "../styles/topbar.css";
import { BiUser, BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Logo from "../assets/images/logo.jpg";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar_logo">
        <a href="/">
          <img src={Logo} alt="logo" className="topbar_logo_img" />
        </a>
      </div>
      <div className="topbar_icons">
        <div className="topbar_icon_item">
          <BiUser />
        </div>
        <div className="topbar_icon_item">
          <BiBell />
        </div>
        <div className="topbar_icon_item">
          <FiSettings />
        </div>
      </div>
    </div>
  );
}
