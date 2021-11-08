import styled from "@emotion/styled";
import theme from "../../theme";

export const S = {};

S.Footer = styled.footer({
  marginTop: 40,
  background: theme.colors.white,
  padding: "30px 0",
});

S.StoreAndSocial = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 30,
  "@media (max-width:1024px)": {
    flexDirection: "column",
  },
});

S.Store = styled.div({
  display: "flex",
  "& a": {
    width: 160,

    "& img": {
      width: "100%",
    },
  },
  "& a:first-of-type": {
    marginRight: 20,
  },
});

S.Social = styled.div({
  display: "flex",
  alignItems: "center",
  "& a": {
    height: 45,
    width: 45,

    "& img": {
      height: "100%",
    },
  },
  "& a:nth-of-type(2)": {
    margin: "0 20px",
  },
  "@media (max-width:1024px)": {
    marginTop: 30,
  },
});

S.ListContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.colors.greyLight}`,
  paddingTop: 30,
  borderBottom: `1px solid ${theme.colors.greyLight}`,
  paddingBottom: 30,
  marginBottom: 30,
  "& > div:first-of-type img": {
    width: 75,
  },
  "@media (max-width:1024px)": {
    flexDirection: "column",
    alignItems: "center",
    "&> div": {
      width: "100%",
      marginBottom: 30,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& span": {
        maxWidth: 200,
      },
    },
  },
});

S.List = styled.div({
  minWidth: 212,
  maxWidth: 250,
  "& > p": {
    marginBottom: 12,
  },
});

S.Brands = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.greyLight}`,
  paddingBottom: 30,
  marginBottom: 30,
  "& img": {
    width: 75,
  },
  "& + h2": {
    textAlign: "center",
  },

  "@media (max-width:1024px)": {
    "& img": {
      width: 45,
    },
  },
});

S.Seperator = styled.span(({ isHorizantal, isList }) => ({
  display: "block",
  width: isHorizantal ? 1 : "100%",
  height: isHorizantal ? 35 : 1,
  background: theme.colors.greyLight,
  margin: isHorizantal ? "0 50px" : "20px 0",
  position: "relative",
  "&:after": {
    display: "block",
    content: '""',
    position: "absolute",
    width: "60%",
    height: 2,
    left: 0,
    top: -0.5,
    background: theme.colors.redLight,
    opacity: isList ? 1 : 0,
  },
  "@media (max-width:1024px)": {
    margin: isHorizantal ? "0 30px" : "20px 0",
  },
}));
