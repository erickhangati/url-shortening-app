import React from "react";

import Logo from "../../UI/SVGs/Logo";
import MenuItem from "./MenuItem";

import styles from "./Navigation.module.scss";

// Menu items.
const menus = ["Features", "Pricing", "Resources"];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {/* Render logo. */}
      <Logo />

      <ul>
        {/* Loop menu items to dispay using MenuItem component. */}
        {menus.map((menu, index) => (
          <MenuItem key={index} menu={menu} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
