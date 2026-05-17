import React from "react";

const LOGO_SRC = "/Images/amg_logo.svg";

const Logo = ({ className = "", alt = "AMG Tech" }) => (
  <img
    src={LOGO_SRC}
    alt={alt}
    className={className}
    draggable={false}
  />
);

export default Logo;
