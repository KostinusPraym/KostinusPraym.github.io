import React from "react";
import styles from "../../../styles/Price.module.scss";

const Price = () => {
  return (
    <section id="price" className={styles.price}>
      <div className={styles.content}>
        <h2 className={styles.title}>Цены</h2>
        <div className={styles.wrap}>
          <p>
            Окунуться в виртуальную реальность – это отличный способ провести
            время . Для тех, кто не любит шумные компании, возможность
            арендовать оборудование – прекрасный способ получить эмоции, не
            выходя из дома.{" "}
          </p>
          <p>
            Аренда VR шлема – разумное решение получить топовое оборудование с
            большим выбором дорогостоящих игр за доступную стоимость. Мы будем
            заботиться о вашем приятном времяпрепровождении, установим и
            настроим оборудование, дадим рекомендации по пользованию, а также
            подберем для вас игру из огромного списка.
          </p>
          <div className={styles.info}>
            <div className={styles.priceBlock}>
              <h3 className={styles.priceTitle}>Аренда VR шлема</h3>
              <div className={styles.priceOptions}>
                <div className={styles.priceElement}>
                  <p>Время сеанса</p>
                  <p>Стоимость</p>
                </div>
                <div className={styles.priceElement}>
                  <p>10 мин</p>
                  <p>5 руб.</p>
                </div>
                <div className={styles.priceElement}>
                  <p>30 мин</p>
                  <p>15 руб.</p>
                </div>
                <div className={styles.priceElement}>
                  <p>1 час</p>
                  <p style={{ color: "#FF2525" }}>25 руб.</p>
                </div>
              </div>
            </div>
            <div className={styles.descriptionsBlock}>
              <div className={styles.descriptionsTitle}>
                <h3>Наше оборудование</h3>
                <strong>Oculus Quest 2</strong>
              </div>
              <div className={styles.param}>
                <div className={styles.paramWrapper}>
                  <p>
                    Непревзойденная графика - Oculus Quest 2 оснащен дисплеями с
                    разрешением 3664×1920 (1832×1920 пикселей на глаз).
                    Качественное изображение в VR играх или во время просмотра
                    фильмов Вам обеспечены.
                  </p>
                  <p>
                    Универсальность - VR-гарнитура способна работать автономно,
                    это значит нет проводам!
                  </p>
                  <p>
                    Кинематографический звук - Встроенные динамики поддерживают
                    технологию 3D-звука, позволяя Вам слышать все вокруг.
                  </p>
                </div>
                <img width={160} height={120} src="/images/oculus.png" alt="oculus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
