import React from "react";

import MenuIcon from "../../UI/SVGs/MenuIcon";
import MenuItems from "./MenuItems/MenuItems";
import CloseMenuIcon from "../../UI/SVGs/CloseMenuIcon";

import styles from "./MobileMenu.module.scss";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  // Toggle mobile menu.
  const menuIconClickHandler = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div className={styles["mobile-menu"]}>
      {/* Render humberger menu icon using showMobileMenu state.*/}
      {!showMobileMenu && <MenuIcon onClick={menuIconClickHandler} />}

      {/* Render close icon using showMobileMenu state.*/}
      {showMobileMenu && <CloseMenuIcon onClick={menuIconClickHandler} />}

      {/* Render mobile menu items. */}
      {showMobileMenu && <MenuItems />}
    </div>
  );
};

export default MobileMenu;
