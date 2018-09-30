import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const { userTwitter, userGPlus } = this.props.config;
    return (
      <div className="pt-2">
        <div className="twitter-follow">
          <a
            href={`https://twitter.com/${userTwitter}?ref_src=twsrc%5Etfw`}
            className="twitter-follow-button"
            data-show-screen-name="false"
            data-show-count="false"
          >
            Follow @{userTwitter}
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </div>
        <div className="gplus-follow">
          <script src="https://apis.google.com/js/platform.js" async />
          <div
            className="g-follow"
            data-annotation="none"
            data-height="20"
            data-href={`//plus.google.com/u/0/${userGPlus}`}
            data-rel="author"
          />
        </div>
      </div>
    );
  }
}

export default UserInfo;
