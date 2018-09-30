import React, { Component } from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

class SocialLinks extends Component {
  render() {
    const realPathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, realPathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = count => (count > 0 ? count : "");
    const renderShareCount = count => (
      <div className="share-count">{filter(count)}</div>
    );

    return (
      <div className="social-links pt-2 container">
        <div className="columns">
          <TwitterShareButton className="column" url={url} title={post.title}>
            <TwitterIcon size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton
            className="column"
            url={url}
            quote={postNode.excerpt}
          >
            <FacebookIcon size={iconSize} />
            <FacebookShareCount url={url}>
              {count => renderShareCount(count)}
            </FacebookShareCount>
          </FacebookShareButton>
          <GooglePlusShareButton className="column" url={url}>
            <GooglePlusIcon size={iconSize} />
            <GooglePlusShareCount url={url}>
              {count => renderShareCount(count)}
            </GooglePlusShareCount>
          </GooglePlusShareButton>
          <LinkedinShareButton
            className="column"
            url={url}
            title={post.title}
            description={postNode.excerpt}
          >
            <LinkedinIcon size={iconSize} />
            <LinkedinShareCount url={url}>
              {count => renderShareCount(count)}
            </LinkedinShareCount>
          </LinkedinShareButton>
          <RedditShareButton className="column" url={url} title={post.title}>
            <RedditIcon size={iconSize} />
            <RedditShareCount url={url}>
              {count => renderShareCount(count)}
            </RedditShareCount>
          </RedditShareButton>
          <TelegramShareButton className="column" url={url}>
            <TelegramIcon size={iconSize} />
          </TelegramShareButton>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
