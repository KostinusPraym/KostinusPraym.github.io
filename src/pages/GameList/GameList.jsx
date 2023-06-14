import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/GameList.module.scss";

const GameList = ({ cards }) => {
  return (
    <div className={styles.gamesList}>
      <div className={styles.content}>
        <h2 className={styles.title}>Каталог игр</h2>
        <article>
          Мы собрали нашу коллекцию игр таким образом, чтобы все и взрослые и
          дети смогли попробовать себя в роли героев боевиков, межгалактических
          рыцарей, ощутить на себе тяжелую ношу называться героем, а может вы
          предпочитаете темную сторону? Выбор за вами
        </article>
        <div className={styles.cards}>
          {cards.map((item) => {
            const path = item.name.split(" ").join("").toLowerCase();
            return (
              <Link
                key={item.name}
                to={`/games/${path}`}
                className={styles.card}
              >
                <img src={item.img.gameList} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.shortDes}</p>
              </Link>
            );
          })}
        </div>
        <div className={styles.btnBack}>
          <Link className={styles.link} to="/">
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameList;
