import React from "react";

import Card from "./Card";

const data = {
  id: "f357ab33-2327-4809-aa15-019215cd9336",
  label: "3'lü Whopper Fırsatı",
  price: 45.0,
  discountLabel: "%5 İndirim",
  firstPrice: 47.96,
  details: [
    "x2 Lipsum",
    "10'lu Lorem Ipsum",
    "x3 Lorem",
    "10'lu lorem",
    "x4 Lipsum",
    "15'lu Lorem Ipsum",
    "x2 Lorem",
  ],
};

export default {
  component: Card,
  title: "Card",
  argTypes: {
    data: {
      description: "card data object",
      table: {
        type: Object,
      },
    },
  },
};

export const Primary = () => (
  <div style={{ background: "gray", padding: 20, width: 700 }}>
    <Card data={data} />
  </div>
);
