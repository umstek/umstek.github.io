import React, { Component } from "react";

class FacebookSaveButton extends Component {
  render() {
    return (
      <div className="facebook-save-button">
        <div id="fb-root" />
        <script
          id="facebook-jssdk"
          src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=${
            this.props.appId
          }&autoLogAppEvents=1`}
          async
        />
        {/* <script>
          {`(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=${
    this.props.appId
  }&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));`}
        </script> */}
        <div
          className="fb-save"
          data-uri={`${this.props.url}`}
          data-size="small"
        />
      </div>
    );
  }
}

export default FacebookSaveButton;
