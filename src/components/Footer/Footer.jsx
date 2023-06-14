import React from "react";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div id="contacts" className={styles.footer}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.440010895038!2d30.572616044050214!3d52.72425197783414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d4033e3416618f%3A0x19cc1cb3dccf3542!2z0YPQuy4g0JvQtdC90LjQvdCwIDU3LCDQkdGD0LTQsC3QmtC-0YjQtdC70LXQstC-!5e0!3m2!1sru!2sby!4v1686124960318!5m2!1sru!2sby"
          title="location vr club"
          style={{
            width: "100%",
            height: "450px",
            border: "0px",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
      <div className={styles.info}>
        <div className={styles.contacts}>
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.address}>Буда-Кошелево ул. Ленина 57 (2 этаж)</p>
          <div className={styles.workingTime}>
            <strong>Время работы:</strong>
            <span> вт-вс 12:00-21:00(в выходные до 22:00)</span>
          </div>
          <div className={styles.messengers}>
            <a href="tel:+375292342906">+375 29 234 2906</a>
            <div>
              <a href="https://www.instagram.com/vrbudakoshelevo/?igshid=MzNlNGNkZWQ4Mg%3D%3D">
                <img
                  style={{ cursor: "pointer" }}
                  src="/images/instagram.png"
                  alt="Instagram"
                />
              </a>
              <a href="https://t.me/+375292342906">
                <img
                  style={{ cursor: "pointer" }}
                  src="/images/telegram.png"
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
