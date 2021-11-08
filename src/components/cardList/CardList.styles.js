import styled from "@emotion/styled";

export const S = {};

S.List = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginLeft: 20,
  "& > div": {
    width: "calc(50% - 15px)",
    marginBottom: 25,
  },
  "@media (max-width:1024px)": {
    marginLeft: 0,
    marginTop: 20,
    "& > div": {
      width: "100%",
    },
  },
});
