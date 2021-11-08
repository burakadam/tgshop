import styled from "@emotion/styled";

export const S = {};

S.Link = styled.a(() => ({
  display: "flex",
  alignItems: "center",
  "& .link__icon": {
    height: 55,
    width: 55,
    borderRadius: "50%",
    boxShadow: "1px 4px 9px 4px rgba(0,0,0,.13)",
    padding: "12.5px 0",
    textAlign: "center",
    marginRight: "1rem",
    "& img": {
      height: 30,
    },
  },
}));
