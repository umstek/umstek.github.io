import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        {tags &&
          tags.map(tag => (
            <Link
              style={{ padding: "3px", textDecoration: "none" }}
              href={`/tags/${_.kebabCase(tag)}`}
              key={tag}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
