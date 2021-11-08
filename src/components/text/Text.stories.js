import React from "react";

import Text from "./Text";

export default {
  component: Text,
  title: "Text",
  argTypes: {
    color: {
      description: "theme/color object key value",
      table: {
        type: String,
      },
    },
    font: {
      description: "theme/fonts object key value",
      table: {
        type: String,
      },
    },
    size: {
      description: "set Text size(from object inText.styles.js)",
      table: {
        type: String,
      },
    },
    underline: {
      description: "css underline of text",
      table: {
        type: Boolean,
      },
    },
  },
};

export const Primary = () => (
  <div style={{ width: 150 }}>
    <Text>This is a text</Text>
  </div>
);

export const Color = () => (
  <div style={{ width: 150 }}>
    <Text color="redDark">This is a text</Text>
  </div>
);

export const Font = () => (
  <div style={{ width: 150 }}>
    <Text font="helvaticaBold">This is a text</Text>
  </div>
);

export const Size = () => (
  <div style={{ width: 150 }}>
    <Text font="helvaticaBold" size="xl">
      This is a text
    </Text>
  </div>
);

export const Underline = () => (
  <div style={{ width: 150 }}>
    <Text underline>This is a text</Text>
  </div>
);
