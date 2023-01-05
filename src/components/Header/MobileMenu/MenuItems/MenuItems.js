import React from "react";

import Button from "../../../UI/Button/Button";
import MenuItem from "./MenuItem";

import styles from "./MenuItems.module.scss";

const menus = ["Features", "Pricing", "Resources", "Login"];

const MenuItems = () => {
  // Helper function to select classes for specific menu.
  const classes = (menu) => {
    if (menu === "Resources") return styles.resources;
    else if (menu === "Login") return styles.login;
    else return "";
  };

  return (
    <nav className={styles["menu-items"]}>
      <ul>
        {/* Loop menus to display them using MenuItem component. */}
        {menus.map((menu, index) => (
          <MenuItem key={index} menu={menu} className={classes(menu)} />
        ))}
      </ul>

      {/* Render signup button. */}
      <Button className={styles.button}>Sign Up</Button>
    </nav>
  );
};

export default MenuItems;
