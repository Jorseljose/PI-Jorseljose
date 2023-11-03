import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/Actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    console.log(myFavorites);
    if (myFavorites.some((favorite) => favorite.id === id)) {
      removeFav(id);
      setIsFav(false);
    } else {
      addFav({ id, status, species, gender, origin, image, onClose });
      setIsFav(true);
    }
  };

  return (
    <div className={style.contenedor}>
      <div className={style.chars}>
        <img src={image} alt={name} />

        {isFav ? (
          <button className="iconButton" onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className="iconButton" onClick={handleFavorite}>
            🤍
          </button>
        )}

        <button
          className="iconButton"
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
      </div>
      <div className={style.detail}>
        <Link to={`/detail/${id}`}>
          <h2>Name: {name}</h2>
        </Link>
        <h3>Status: {status}</h3>
        <h3>Species: {species}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Origin: {origin}</h3>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
