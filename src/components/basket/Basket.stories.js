import React from "react";

import Basket from "./Basket";

export default {
  component: Basket,
  title: "Basket",
  argTypes: {
    count: {
      description: "total price",
      table: {
        type: String,
      },
    },
  },
};

export const Primary = () => (
  <div style={{ width: 150 }}>
    <Basket count="10,87" />
  </div>
);
