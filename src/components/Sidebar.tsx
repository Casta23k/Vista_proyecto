import "../styles/Sidebar.css";
import { FaHome, FaProjectDiagram, FaUsers, FaClock, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">ProTrack</div>
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <FaHome className="icon" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <FaProjectDiagram className="icon" /> Proyectos
          </a>
        </li>
        <li>
          <a href="#">
            <FaUsers className="icon" /> Equipos
          </a>
        </li>
        <li>
          <a href="#">
            <FaClock className="icon" /> Tiempo Ocupado
          </a>
        </li>
        <li>
          <a href="#">
            <FaCog className="icon" /> Configuración
          </a>
        </li>
      </ul>
      <div className="sidebar-logout">
        <FaSignOutAlt className="icon" /> Log Out
      </div>
    </div>
  );
};

export default Sidebar;
