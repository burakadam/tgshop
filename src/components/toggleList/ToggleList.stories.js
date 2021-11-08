import React from "react";

import ToggleList from "./ToggleList";

export default {
  component: ToggleList,
  title: "ToggleList",
  argTypes: {
    title: {
      description: "Toggle list text besides arrow down",
      table: {
        type: String,
      },
    },
  },
};

export const Primary = () => (
  <div style={{ width: 150 }}>
    <ToggleList title="Toggle list title" data={["lr 1", "lr 2"]} />
  </div>
);
