import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "../styles/sidebar.css";
import {
  AiFillDashboard,
  AiOutlineUnorderedList,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { RiBillFill } from "react-icons/ri";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/admin/dashboard" className="sidebar_link">
        Thống Kê <AiFillDashboard />
      </NavLink>
      <NavLink to="/admin/cate" className="sidebar_link">
        Loại Sản Phẩm <AiOutlineUnorderedList />
      </NavLink>
      <NavLink to="/admin/products" className="sidebar_link">
        Sản Phẩm <AiOutlineUnorderedList />
      </NavLink>
      <NavLink to="/admin/bills" className="sidebar_link">
        Hóa Đơn <RiBillFill />
      </NavLink>
      <NavLink to="/admin/users" className="sidebar_link">
        Tài Khoản <AiOutlineUserSwitch />
      </NavLink>
    </div>
  );
}
