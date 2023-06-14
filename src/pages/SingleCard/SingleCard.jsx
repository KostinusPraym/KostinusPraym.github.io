import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "../../styles/SingleCard.module.scss";

import Info from "./Info/Info";
import Similar from "./Similar/Similar";
import Slider from "./Slider/Slider";

const SingleCard = ({ cards }) => {
  // for slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const path = useParams().card;

  // for slider
  useEffect(() => {
    setCurrentSlide(0);
  }, [path]);

  const data = cards.find((item) => {
    const fixName = item.name.split(" ").join("").toLowerCase();
    return fixName === path;
  });

  // for slider
  const selectDot = (index) => {
    return setCurrentSlide(index);
  };

  return (
    <div className={styles.singleCard}>
      <div className={styles.container}>
        <h2>{data?.name}</h2>
        <div className={styles.sliderBlock}>
          <Slider
            slides={data?.img.singleCatalog}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
        <iframe
          className={styles.video}
          src={data?.video}
          title="video about the game"
          style={{
            width: "100%",
            height: "100%",
            border: "0px",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
        <Info data={data} selectDot={selectDot} />
        <h2 className={styles.similarTitle}>Другие</h2>
        <div className={styles.similar}>
          {cards
            .filter((item) => {
              const fixName = item.name.split(" ").join("").toLowerCase();
              return fixName !== path;
            })
            .map((item) => {
              return <Similar key={item.name} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
