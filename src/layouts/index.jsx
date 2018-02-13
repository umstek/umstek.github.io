import React from "react";
import Helmet from "react-helmet";
import App from "grommet/components/App";
import Split from "grommet/components/Split";
import Sidebar from "grommet/components/Sidebar";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Title from "grommet/components/Title";
import Paragraph from "grommet/components/Paragraph";
import Button from "grommet/components/Button";
import Anchor from "grommet/components/Anchor";

import config from "../../data/SiteConfig";
import "../scss/main.scss";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <App centered={false}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Split flex="right">
          <Sidebar colorIndex="brand" fixed>
            <Header pad="medium" justify="between">
              <Title>Title</Title>
            </Header>
            <Box flex="grow" justify="start">
              <Menu primary>
                <Anchor href="#" className="active">
                  First
                </Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Box>
            <Footer pad="medium">
              <Button>Home</Button>
            </Footer>
          </Sidebar>
          <Article full>
            <Section pad="large" align="left">
              {children()}
            </Section>
            <Footer pad="medium" size="medium" justify="between">
              <Title>
                <s />
                {config.siteTitle}
              </Title>
              <Box direction="row" align="center" pad={{ between: "medium" }}>
                <Paragraph margin="none">{config.copyright}</Paragraph>
                <Menu
                  direction="row"
                  size="small"
                  dropAlign={{ right: "right" }}
                >
                  <Anchor href="#">Support</Anchor>
                  <Anchor href="#">Contact</Anchor>
                  <Anchor href="#">About</Anchor>
                </Menu>
              </Box>
            </Footer>
          </Article>
        </Split>
      </App>
    );
  }
}
