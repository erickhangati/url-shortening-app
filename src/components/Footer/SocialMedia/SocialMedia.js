import React from "react";

import FacebookIcon from "../../UI/SVGs/FacebookIcon";
import TwitterIcon from "../../UI/SVGs/TwitterIcons";
import PinterestIcon from "../../UI/SVGs/PinterestIcon";
import InstagramIcon from "../../UI/SVGs/InstagramIcon";

import styles from "./SocialMedia.module.scss";

// Footer social media icons and links.

const SocialMedia = () => {
  return (
    <div className={styles["social-media"]}>
      <FacebookIcon className={styles["social-media__icon"]} />
      <TwitterIcon className={styles["social-media__icon"]} />
      <PinterestIcon className={styles["social-media__icon"]} />
      <InstagramIcon className={styles["social-media__icon"]} />
    </div>
  );
};

export default SocialMedia;
