import React from "react";
import { Link } from "react-router-dom";

import styles from "../../../styles/Games.module.scss"

import CardPreview from "./CardPreview/CardPreview"

const Games = ({ cards }) => {
  return (
    <section className={styles.games}>
      <div className={styles.content}>
        <h2 className={styles.title}>Наши игры</h2>
        <div className={styles.infoBlock}>
          <div className={styles.infoArticle}>
            <article>
              Мы собрали нашу коллекцию игр таким образом, чтобы все и взрослые
              и дети смогли попробовать себя в роли героев боевиков,
              межгалактических рыцарей, ощутить на себе тяжелую ношу называться
              героем, а может вы предпочитаете темную сторону? Выбор за вами
            </article>
            <p>Докажи что лучший!</p>
          </div>
          <nav className={styles.gamesBlock}>
            {cards
              .filter((item) => item.preview)
              .map((item) => {
                return <CardPreview key={item.name} {...item} />;
              })}
          </nav>
          <Link className={styles.link} to="/games">
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Games;
