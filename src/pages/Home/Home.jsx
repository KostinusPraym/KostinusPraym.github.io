import React from "react";

import styles from "../../styles/Home.module.scss";

import Games from "./Games/Games";
import Price from "./Price/Price";

const Home = ({ cards }) => {
  return (
    <>
      <section className={styles.firstImage}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Начни свое путешествие в виртуальную реальность
          </h1>
        </div>
      </section>
      <Games cards={cards} />
      <Price />
    </>
  );
};

export default Home;
