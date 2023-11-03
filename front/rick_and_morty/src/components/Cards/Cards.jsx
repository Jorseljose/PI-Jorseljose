import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.container}>
      {characters.map((char) => {
        return (
          <div className={style.home}>
            <Card
              id={char.id}
              name={char.name}
              species={char.species}
              gender={char.gender}
              image={char.image}
              status={char.status}
              origin={char.origin.name}
              onClose={onClose}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
