import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import App, { Container } from "next/app";
import { Provider as RebassProvider } from "rebass";
import { ThemeProvider } from "styled-components";

import theme from "../config/theme";
import Layout from "../components/Layout";
import components from "../components/markdown";

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
          <RebassProvider theme={theme}>
            <Container>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Container>
          </RebassProvider>
      </MDXProvider>
    );
  }
}
