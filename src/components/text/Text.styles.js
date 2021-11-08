import styled from "@emotion/styled";

import theme from "../../theme";

export const S = {};

const sizes = {
  xl: {
    fontSize: 25,
  },
  lg: {
    fontSize: 22,
  },
  md: {
    fontSize: 16,
  },
  sm: {
    fontSize: 14,
  },
  xs: {
    fontSize: 12,
  },
};

function _getFontFamiles() {
  return {
    helvaticaThin: { fontFamily: theme.fonts.helvaticaThin },
    helvaticaLight: { fontFamily: theme.fonts.helvaticaLight },
    helvaticaBold: { fontFamily: theme.fonts.helvaticaBold },
  };
}

S.Text = styled.p(({ font, color, size, underline }) => ({
  ...sizes[size],
  lineHeight: 1.2,
  ..._getFontFamiles()[font],
  color: theme.colors[color],
  textDecoration: underline ? "line-through" : "none",
}));
