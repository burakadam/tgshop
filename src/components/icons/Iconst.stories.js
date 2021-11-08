import React from "react";

import Icons from "./Icons";

export default {
  component: Icons,
  title: "Icons",
  argTypes: {
    icon: {
      description: "constant/icons object key value",
      table: {
        type: Object,
      },
    },
  },
};

export const Primary = () => <Icons icon="bitmap" />;
