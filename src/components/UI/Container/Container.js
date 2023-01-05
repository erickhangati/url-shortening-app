import React from "react";

import styles from "./Container.module.scss";

// Re-usable container component.

const Container = (props) => {
  // Append any classes passed through props.
  const classes = `${styles.container}${
    props.className ? ` ${props.className}` : ""
  }`;

  return <div className={classes}>{props.children}</div>;
};

export default Container;
