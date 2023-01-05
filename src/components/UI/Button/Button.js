import React from "react";

import styles from "./Button.module.scss";

// Re-usable button component.

const Button = (props) => {
  // Append any classes passed through props.
  const classes = `${styles.button}${
    props.className ? ` ${props.className}` : ""
  }`;

  return (
    <button className={classes} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
