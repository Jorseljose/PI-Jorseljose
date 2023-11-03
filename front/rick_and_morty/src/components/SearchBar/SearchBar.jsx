import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.SearchBar}>
      <input type="search" value={id} onChange={handleChange} />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
      <button onClick={() => onSearch(Math.floor(Math.random() * 826))}>
        Agregar random
      </button>
    </div>
  );
};

export default SearchBar;
