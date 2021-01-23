import React from "react";

export default (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => (
  <a
    {...props}
    className={["my-1 px-2 transition-colors", props.className]
      .filter((cn) => !!cn)
      .join(" ")}
  />
);
