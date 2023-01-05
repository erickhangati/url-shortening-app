import React from "react";

import styles from "./MenuItem.module.scss";

const MenuItem = ({ menu }) => {
  return <li className={styles["menu-item"]}>{menu}</li>;
};

export default MenuItem;
