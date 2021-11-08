import React from "react";
import Text from "../text";

import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    className: {
      description: "Button element class",
      table: {
        type: String,
      },
    },
    backgroundColor: {
      description: "Under theme/colors object key value",
      table: {
        type: String,
      },
    },
  },
};

export const Primary = () => (
  <Button>
    <Text>Button</Text>
  </Button>
);

export const Secondary = () => (
  <Button backgroundColor="black">
    <Text color="white">Button</Text>
  </Button>
);
