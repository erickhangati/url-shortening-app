import React, { useContext } from "react";

import Button from "../../UI/Button/Button";
import LinkContext from "../../../store/link-context";

import styles from "./Link.module.scss";

const Link = ({ link, index }) => {
  const linkCtx = useContext(LinkContext);

  // Copy shortenedUrl to clipboard function.
  const copyClickHandler = () => {
    // Loop to filter link to copy.
    const filtered = linkCtx.links.filter((item) => link !== item);

    // Recreate object with copied link.
    const transformed = {
      ...link,
      copied: true,
    };

    // Enusre to return copied link object at its position.
    filtered.splice(index, 0, transformed);

    // Set links.
    linkCtx.setLinks(filtered);

    // Copy link to clipboard.
    navigator.clipboard.writeText(link.shortenedLink);
  };

  // Link length trim function.
  const trimLink = (char) => {
    if (link.originalLink.length > char) {
      return `${link.originalLink.substring(0, char)}...`;
    } else {
      return link.originalLink;
    }
  };

  // Check width to help with trimming link length.
  const originalLinkTrimmed = () => {
    if (window.innerWidth > 1400) return trimLink(68);
    if (window.innerWidth > 1200) return trimLink(52);
    if (window.innerWidth > 800) return trimLink(30);
    if (window.innerWidth > 475) return trimLink(38);
    if (window.innerWidth > 350) return trimLink(30);
    if (window.innerWidth > 300) return trimLink(25);
  };

  return (
    <li className={styles.link}>
      <span className={styles["link__original-link"]}>
        {originalLinkTrimmed()}
      </span>
      <div>
        <span>{link.shortenedLink}</span>
        <Button
          className={`${styles["copy-button"]}${
            link.copied ? ` ${styles["copy-button--copied"]}` : ""
          }`}
          onClick={copyClickHandler}
        >
          {/* Change button text when copied. */}
          {link.copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </li>
  );
};

export default Link;
