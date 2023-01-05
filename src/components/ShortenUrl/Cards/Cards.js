import React from "react";

import CardItem from "./CardItem";
import cardDetails from "./CardDetails";

import styles from "./Cards.module.scss";

// Features cards section.

const Cards = () => {
  return (
    <div className={styles.cards}>
      <CardItem card={cardDetails.card1} />
      <hr />
      <CardItem card={cardDetails.card2} className={styles["cards--2"]} />
      <hr />
      <CardItem card={cardDetails.card3} className={styles["cards--3"]} />
    </div>
  );
};

export default Cards;
