import React from "react";

// Link context to define state globally.

const LinkContext = React.createContext({
  links: [],
  setLinks: () => {},
});

export default LinkContext;
