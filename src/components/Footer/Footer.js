import React from "react";

import Container from "../UI/Container/Container";
import Logo from "../UI/SVGs/Logo";
import FooterMenu from "./Menus/FooterMenu/FooterMenu";
import SocialMedia from "./SocialMedia/SocialMedia";
import menus from "./Menus/menus";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles["footer__container"]}>
        {/* Render footer logo. */}
        <Logo className={styles["footer__logo"]} />

        {/* Render footer menus */}
        <FooterMenu menu={menus.features} />
        <FooterMenu menu={menus.resources} />
        <FooterMenu menu={menus.company} />

        {/* Render social media icons */}
        <SocialMedia />
      </Container>
    </footer>
  );
};

export default Footer;
