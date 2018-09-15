import * as React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";

import Post from "../components/Post";
import { postNames } from "../content";

export default class BlogPage extends React.Component {
  render() {
    return (
      <div>
        <Route path={`${this.props.match.url}/:name`} component={Post} />
        <Route
          exact
          path={this.props.match.url}
          render={() => (
            <ul>
              {postNames().map(s => (
                <li>
                  <Link key={s} to={`${this.props.match.url}/${s}`}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    );
  }
}
