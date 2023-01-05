import React, { useState } from "react";

import LinkContext from "./link-context";

// Content provider to make the states accessible globally.

const linkContext = {
  links: [],
  setLinks: () => {},
};

const LinkProvider = (props) => {
  const [links, setLinks] = useState([]);

  return (
    <LinkContext.Provider
      value={{ ...linkContext, links: links, setLinks: setLinks }}
    >
      {props.children}
    </LinkContext.Provider>
  );
};

export default LinkProvider;
