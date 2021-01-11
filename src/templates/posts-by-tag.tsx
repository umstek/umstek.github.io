import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/layout";
import PostsList from "../components/PostsList";

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { nodes: posts, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout location={`/tags/${kebabCase(tag)}/`} title={tagHeader}>
      <ol style={{ listStyle: `none` }}>
        <PostsList posts={posts} />
      </ol>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;
