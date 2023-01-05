import React from "react";

import styles from "./CardItem.module.scss";

// Features card item.

const CardItem = ({ card, className }) => {
  return (
    <article
      className={`${styles["card-item"]}${className ? ` ${className}` : ""}`}
    >
      <div className={styles["card-item__icon"]}>{card.icon}</div>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </article>
  );
};

export default CardItem;
