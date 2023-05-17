import React from "react";

const PageLink = ({ id, href, text, className }) => {
  return (
    <li key={id}>
      <a href={href} rel="noopener noreferrer" className={className}>
        {text}
      </a>
    </li>
  );
};

export default PageLink;
