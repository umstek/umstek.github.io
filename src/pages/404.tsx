import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import A from "../components/A";

import svgPath from "./undraw_empty_xct9.svg";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div className="flex flex-col md:flex-row justify-center">
        <svg className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 mx-8 my-8 lg:my-16 fill-current">
          <image
            className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-96 lg:w-96 fill-current"
            xlinkHref={svgPath}
          />
        </svg>
        <div className="mx-8 my-8 flex flex-col justify-center">
          <p className="px-2 text-blue-600 font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Page not found.
          </p>
          <span className="mt-4 flex flex-row">
            <A href="/" className="px-2 hover:bg-gray-700 hover:text-white">
              Go to homepage
            </A>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
