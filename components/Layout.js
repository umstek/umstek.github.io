import React, { Component } from "react";
import { Container } from "rebass";
import Navbar from "./Navbar";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container {...this.props} />
      </div>
    );
  }
}
