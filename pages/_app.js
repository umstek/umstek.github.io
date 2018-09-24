import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import App, { Container } from "next/app";
import { Provider as RebassProvider } from "rebass";
import Layout from "../components/Layout";
import components from "../components/markdown";

export default class _App extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <RebassProvider>
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
