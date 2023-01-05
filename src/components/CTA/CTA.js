import React from "react";

import Section from "../UI/Section/Section";
import Button from "../UI/Button/Button";

import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <Section className={styles.cta}>
      <h2>Boost your links today</h2>
      <Button className={styles["cta__button"]}>Get Started</Button>
    </Section>
  );
};

export default CTA;
