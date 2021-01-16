import { graphql } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import kebabCase from "lodash/kebabCase";

import Tag from "../components/Tag";
import Layout from "../components/layout";

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <Layout location={`/tags`} title={title}>
      <div className="mt-16">
        <Helmet title={title} />
        <div>
          <h1 itemProp="headline">
            <div className="text-3xl text-center text-gray-700">
              <span className="px-2">Tags</span>
            </div>
          </h1>
          <div className="mt-16 flex flex-wrap justify-center">
            {group.map((tag) => (
              <Tag
                name={tag.fieldValue}
                link={`/tags/${kebabCase(tag.fieldValue)}/`}
                count={tag.totalCount}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
