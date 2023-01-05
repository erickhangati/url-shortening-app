import React from "react";

import styles from "./Heading.module.scss";

// Re-usable heading component.

const Heading = () => {
  return (
    <div className={styles.heading}>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
  );
};

export default Heading;
