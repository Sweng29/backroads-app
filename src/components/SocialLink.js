import React from "react";

const SocialLink = (props) => {
  const { id, href, icon } = props.link;
  return (
    <li key={id}>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={props.socialClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
