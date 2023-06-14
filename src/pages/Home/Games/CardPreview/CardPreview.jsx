import React from "react";
import styles from "../../../../styles/CardPreview.module.scss"
import { Link } from "react-router-dom";
const CardPrev = ({ name, img, genre }) => {

  const genreStr = genre.join(", ");
  const path = name.split(" ").join("").toLowerCase()

  return (
    
   <Link className={styles.card} to={`games/${path}`}>
        <img src={img.imgPr} alt="Game card" />
        <div className={styles.descriptionBlock}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.genre}>{genreStr}</p>
        </div>
   </Link>
  );
};

export default CardPrev;
