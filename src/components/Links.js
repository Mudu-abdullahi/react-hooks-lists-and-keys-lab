import React from "react";

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <a href={github}>GitHub</a>
      <a href={linkedin}>LinkedIn</a>
    </div>
  );
};

export default Links;
