import { Component } from "react";
import fetch from "isomorphic-unfetch";
import { Card } from "rebass";

export default class ProjectPage extends Component {
  static async getInitialProps(props) {
    const res = await fetch(
      `https://api.github.com/repos/umstek/${props.query.name}`
    );
    const {
      name,
      description,
      homepage,
      stargazers_count,
      watchers_count,
      forks_count,
      language,
      license
    } = await res.json();

    return {
      name,
      description,
      homepage,
      stargazers_count,
      watchers_count,
      forks_count,
      language,
      license: (license || {}).spdx_id
    };
  }

  render() {
    return (
      <Card>
        {Object.keys(this.props).map(k => (
          <li>
            {k}:{this.props[k]}
          </li>
        ))}
      </Card>
    );
  }
}
