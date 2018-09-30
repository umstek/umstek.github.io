import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container grid-xl">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
