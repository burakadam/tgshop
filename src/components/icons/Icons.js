import React from "react";

import icons from "../../constants/icons";

export default function Icons({ icon, alt, ...rest }) {
  const url = icons[icon];
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/icons/${url}`}
      alt={alt}
      {...rest}
    />
  );
}
