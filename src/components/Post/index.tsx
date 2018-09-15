import * as React from "react";
import Markdown from "markdown-to-jsx";

import loadPost from "../../content";

interface PostProps {
  match: { params: { name: string } };
}

interface PostState {
  markdown: string;
  frontmatter: object;
}

export default class Post extends React.Component<PostProps, PostState> {
  componentDidMount() {
    console.log(this.props.match.params.name);
    loadPost(this.props.match.params.name)
      .then(({ markdown, frontmatter }) =>
        this.setState({ markdown, frontmatter })
      )
      .catch(console.log);
  }

  state = { markdown: "Loading...", frontmatter: {} };

  render() {
    return (
      <div>
        <Markdown>{this.state.markdown}</Markdown>
      </div>
    );
  }
}
