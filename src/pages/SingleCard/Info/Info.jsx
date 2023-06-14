import React from "react";
import styles from "../../../styles/Info.module.scss";

const Info = ({ data, selectDot }) => {
  const genreStr = data?.genre.join(", ");
  return (
    <div className={styles.info}>
      <div className={styles.infoImageBlock}>
        {data?.img.singleCatalog.map((item, index) => {
          return (
            <img
              key={index}
              style={{ cursor: "pointer" }}
              src={item}
              alt="gameCatalog"
              onClick={() => selectDot(index)}
            />
          );
        })}
      </div>
      <div className={styles.price}>
        <p>Стоимость аренды:</p>
        <p>25 руб. за час</p>
      </div>
      <article className={styles.shortDescription}>{data?.shortDes}</article>
      <p className={styles.genre}>{genreStr}</p>
      <div className={styles.params}>
        <div className={styles.paramsElements}>
          <img src="/images/icons/person.svg" alt="person" />
          <p>Для одного игрока</p>
        </div>
        <div className={styles.paramsElements}>
          <img src="/images/icons/controlers.svg" alt="controlers" />
          <p>Отслеживание контроллеров</p>
        </div>
        <div className={styles.paramsElements}>
          <img src="/images/icons/helmet.svg" alt="helmet" />
          <p>Только для VR</p>
        </div>
      </div>
      <article className={styles.descriptions}>{data?.des}</article>
    </div>
  );
};

export default Info;
