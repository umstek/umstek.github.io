import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./ghcolors.css";
import "./post.scss";
import FacebookSaveButton from "../components/FacebookSaveButton/FacebookSaveButton";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <div className="hide-md post-back-icon pt-2 float-left">
          <Link style={{ textDecoration: "none" }} to="/">
            <button
              className="btn tooltip tooltip-bottom btn-primary btn-action btn-lg fixed"
              data-tooltip="Back"
            >
              <i className="icon icon-arrow-left" />
            </button>
          </Link>
        </div>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="container grid-sm">
            <h1>{post.title}</h1>
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
            <FacebookSaveButton
              appId={config.siteFBAppID}
              url={config.siteUrl + slug}
            />
            <div className="divider" />
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: postNode.html }}
            />
            <div className="divider" />
            <div className="post-meta">
              <SocialLinks postPath={slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
            <Disqus postNode={postNode} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
