import * as React from "react";
import Markdown from "markdown-to-jsx";

import "spectre.css";

import Test from "./pages/test";

import { markdown, frontmatter } from "./content/test.md";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Test />
        <Markdown>{markdown}</Markdown>
      </div>
    );
  }
}
