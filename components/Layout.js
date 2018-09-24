import React, { Component } from "react";
import { Container } from "rebass";

export default class Layout extends Component {
  render() {
    return <Container {...this.props} />;
  }
}
