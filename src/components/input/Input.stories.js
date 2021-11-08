import React from "react";

import Input from "./Input";

export default {
  component: Input,
  title: "Input",
  argTypes: {
    placeholder: {
      description: "input placeholder",
      table: {
        type: String,
      },
    },
    icon: {
      description: "constants/icons object key value",
      table: {
        type: String,
      },
    },
  },
};

export const Primary = () => (
  <div style={{ width: 300 }}>
    <Input placeholder="Write something" />
  </div>
);

export const WithIcon = () => (
  <div style={{ width: 300 }}>
    <Input placeholder="Search" icon="search" />
  </div>
);
