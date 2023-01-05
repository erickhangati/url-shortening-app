import React from "react";

import Navigation from "./Navigation/Navigation";
import Login from "./Login/Login";
import MobileMenu from "./MobileMenu/MobileMenu";

import styles from "./Header.module.scss";

const Header = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <header className={styles.header}>
      {/* Render menus */}
      <Navigation />

      {/* Render login/signup menu */}
      <Login />

      {/* Render mobile menu */}
      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
    </header>
  );
};

export default Header;
