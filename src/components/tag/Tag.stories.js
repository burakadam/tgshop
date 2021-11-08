import React from "react";

import Tag from "./Tag";

export default {
  component: Tag,
  title: "Tag",
  argTypes: {
    label: {
      description: "tag text",
      table: {
        type: String,
      },
    },
  },
};

export const Primary = () => (
  <div style={{ width: 150 }}>
    <Tag label="This is a tag" />
  </div>
);
