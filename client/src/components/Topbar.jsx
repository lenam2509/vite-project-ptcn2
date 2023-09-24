import "../styles/topbar.css";
import { BiUser, BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar_logo">Logo</div>
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
