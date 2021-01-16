import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXEmbedProvider } from "mdx-embed";
import { Link, graphql } from "gatsby";
import { DiscussionEmbed } from "disqus-react";
import { kebabCase } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Tag from "../components/Tag";
import DateDisplay from "../components/DateDisplay";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const disqusConfig = {
    shortname: data.site.siteMetadata?.shortname || "",
    config: { identifier: post.fields.slug || "", title: post.title || "" },
  };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="px-4 sm:px-8 md:px-0 container mx-auto mt-16"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">
            <div className="text-3xl sm:text-4xl sm:font-light md:text-5xl text-center text-gray-700">
              {post.frontmatter.title}
            </div>
          </h1>
          <DateDisplay className="mt-4" date={post.frontmatter.date} />
          <div className="px-2 overflow-x-auto overflow-y-hidden mt-2 flex flex-row justify-center">
            {(post.frontmatter.tags || []).map((name) => (
              <Tag key={name} name={name} link={`/tags/${kebabCase(name)}/`} />
            ))}
          </div>
        </header>
        <section
          itemProp="articleBody"
          className="mx-auto mt-32 prose prose-blue lg:prose-lg"
        >
          <MDXEmbedProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXEmbedProvider>
        </section>
        <footer></footer>
      </article>
      <div className="px-4 sm:px-8 md:px-0 mt-32 max-w-prose mx-auto">
        <DiscussionEmbed
          config={disqusConfig.config}
          shortname={disqusConfig.shortname}
        />
      </div>

      <nav className="my-8 mx-4">
        <ul className="flex flex-row justify-between">
          <li>
            {previous && (
              <Link
                className="px-2 hover:bg-gray-700 hover:text-white"
                to={`/posts${previous.fields.slug}`}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                className="px-2 hover:bg-gray-700 hover:text-white"
                to={`/posts${next.fields.slug}`}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        shortname
      }
    }
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
