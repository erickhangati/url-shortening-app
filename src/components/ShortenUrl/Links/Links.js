import React, { useContext } from "react";

import Link from "./Link";
import LinkContext from "../../../store/link-context";

import styles from "./Links.module.scss";

// Link component.

const Links = () => {
  const linkCtx = useContext(LinkContext);

  return (
    <ul className={styles.links}>
      {/* Loop links to render links using Link component. */}
      {linkCtx.links.map((link, index) => (
        <Link key={index} link={link} index={index} />
      ))}
    </ul>
  );
};

export default Links;
