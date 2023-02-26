import SearchBar from "../SearchBar/SearchBar";
import "./Nav.modules.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <div className="navbar">
            <Link to="/home" className="link">
                Home
            </Link>
            <Link to="/about" className="link">
                About
            </Link>
            <Link to="/" className="link">
                Logout
            </Link>
            <SearchBar onSearch={onSearch} />
        </div>
    );
};

export default Nav;
