import React from "react";

import styles from "./FooterMenu.module.scss";

// Re-usable footer column.

const FooterMenu = ({ menu }) => {
  // Title and menus received through props.
  return (
    <div className={styles["footer-menu"]}>
      <h3>{menu.title}</h3>
      <ul>
        {/* Loop menu items to display items in list. */}
        {menu.menus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
