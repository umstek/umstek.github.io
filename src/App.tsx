import * as React from "react";
// tslint:disable-next-line
import Markdown from "markdown-to-jsx";

import "spectre.css";

import Test from "./pages/test";

// tslint:disable-next-line
import { markdown, frontmatter } from "./content/test.md";

export default class App extends React.Component {
  render() {
    // console.log(markdown);

    return (
      <div>
        <Test />
        <Markdown>{markdown}</Markdown>
      </div>
    );
  }
}
