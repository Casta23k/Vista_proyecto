import { FaSearch, FaUserCircle } from "react-icons/fa";
import "../styles/Header.css"
const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <div className="input-group w-50">
        <input type="text" className="form-control rounded-start" placeholder="Buscar Proyecto..." />
        <span className="input-group-text bg-light"><FaSearch /></span>
      </div>
      <div className="d-flex align-items-center">
        <span className="me-2 fw-bold">Alexa Melon</span>
        <FaUserCircle size={30} />
      </div>
    </header>
  );
};

export default Header;
