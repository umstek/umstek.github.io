import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import { Provider as RebassProvider } from "rebass";
import App, { Container } from "next/app";

import components from "../components/markdown";

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <RebassProvider>
          <Component {...pageProps} />
        </RebassProvider>
      </MDXProvider>
    );
  }
}
