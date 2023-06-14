import React from "react";
import styles from "../../../styles/Similar.module.scss";
import { Link } from "react-router-dom";

const Similar = ({ name, genre, img }) => {
  const path = name.split(" ").join("").toLowerCase();
  const genreStr = genre.join(", ");

  return (
    <Link to={`/games/${path}`} className={styles.similarCard}>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{genreStr}</p>
      </div>
      <img width={56} height={68} src={img.gameList} alt={name} />
    </Link>
  );
};

export default Similar;
