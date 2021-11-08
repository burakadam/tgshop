import React from "react";
import Text from "../text";

import Link from "./Link";

export default {
  component: Link,
  title: "Link",
  argTypes: {
    to: {
      description: "link address",
      table: {
        type: String,
      },
    },
    isExternal: {
      description: "set link target blank",
      table: {
        type: Boolean,
      },
    },
    icon: {
      description: "constants/icons object key value",
      table: {
        type: String,
      },
    },
    iconalt: {
      description: "icon alt value",
      table: {
        type: String,
      },
    },
  },
};

export const Primary = () => (
  <Link to="/">
    <Text>Link</Text>
  </Link>
);

export const External = () => (
  <Link to="/" isExternal>
    <Text>External Link</Text>
  </Link>
);

export const WithIcon = () => (
  <div style={{ height: 50 }}>
    <Link to="/" icon="instagram" iconalt="insragram icon">
      <Text>External Link</Text>
    </Link>
  </div>
);
