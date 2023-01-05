import React from "react";

import Button from "../UI/Button/Button";
import Section from "../UI/Section/Section";
import Container from "../UI/Container/Container";

import styles from "./Hero.module.scss";

// Hero section component.

const Hero = () => {
  return (
    <Section className={styles.hero}>
      <Container className={styles["hero-container"]}>
        <div className={styles["hero-text"]}>
          <h2>More than just shorter links</h2>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button className={styles["hero-text__button"]}>Get Started</Button>
        </div>
        <div className={styles["hero-blank"]}></div>
      </Container>
    </Section>
  );
};

export default Hero;
