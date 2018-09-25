import Document, { Head, Main, NextScript } from "next/document";
import getConfig from "next/config";
import { ServerStyleSheet } from "styled-components";

import { atomOneLightHighlighting } from "../styles/atomOneLight";

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const { renderPage } = ctx;
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags, title } = this.props;

    return (
      <html lang="en">
        <Head>
          {styleTags}
          <style>{atomOneLightHighlighting}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
