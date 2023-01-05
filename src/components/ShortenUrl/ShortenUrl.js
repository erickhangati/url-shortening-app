import React from "react";

import Section from "../UI/Section/Section";
import Container from "../UI/Container/Container";
import Form from "./Form/Form";
import Links from "./Links/Links";
import Heading from "./Heading/Heading";
import Cards from "./Cards/Cards";

import styles from "./ShortenUrl.module.scss";

const ShortenUrl = () => {
  return (
    <Section className={styles["section--shorten-url"]}>
      <Container>
        {/* Render shortenUrl form input */}
        <Form />

        {/* Render shortened links. */}
        <Links />

        {/* Render section heading. */}
        <Heading />

        {/* Render features cards */}
        <Cards />
      </Container>
    </Section>
  );
};

export default ShortenUrl;
