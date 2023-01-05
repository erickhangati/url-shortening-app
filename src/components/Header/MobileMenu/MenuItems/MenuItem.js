import React from "react";

import styles from "./MenuItem.module.scss";

const MenuItem = ({ menu, className }) => {
  // Local class plus any other classes passed through props.
  const classes = `${styles["menu-item"]}${className ? ` ${className}` : ""}`;
  return <li className={classes}>{menu}</li>;
};

export default MenuItem;
