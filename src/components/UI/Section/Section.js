import React from "react";
import styles from "./Section.module.scss";

// Re-usable section component.

const Section = (props) => {
  // Append any classes passed through props.
  const classes = `${styles.section}${
    props.className ? ` ${props.className}` : ""
  }`;

  return <section className={classes}>{props.children}</section>;
};

export default Section;
