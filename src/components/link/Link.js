import React from "react";

import Icons from "../icons";
import { S } from "./Link.styles";

export default function Link({
  to,
  isExternal = false,
  icon,
  iconalt,
  children,
  ...rest
}) {
  return (
    <S.Link
      href={to}
      target={isExternal ? "_blank" : "_self"}
      rel="noreferrer"
      {...rest}
    >
      {icon && (
        <span className="link__icon">
          <Icons icon={icon} alt={iconalt} />
        </span>
      )}
      {children}
    </S.Link>
  );
}
