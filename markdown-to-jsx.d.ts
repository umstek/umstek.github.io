import { Component } from "react";

declare module "markdown-to-jsx" {
  export default class Markdown extends Component {
    constructor(
      children: string,
      forceBlock?: boolean,
      forceInline?: boolean,
      overrides?: {
        [x: string]:
          | Component
          | { component?: Component; props?: { [x: string]: any } };
      }
    );
  }
}
