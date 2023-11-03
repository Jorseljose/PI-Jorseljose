import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.home}>
      <SearchBar onSearch={onSearch} />
      <div className="style">
        <Link to="/about">About</Link>

        <NavLink to="/home">Home</NavLink>

        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </div>
  );
};

export default Nav;
