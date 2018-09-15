import * as React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="container grid-lg">
        <header className="navbar">
          <section className="navbar-section">
            <Link to="/projects" className="btn btn-link">
              Projects
            </Link>
            <Link to="/blog" className="btn btn-link">
              Blog
            </Link>
          </section>
          <section className="navbar-center">
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </section>
          <section className="navbar-section">
            <Link to="/about" className="btn btn-link">
              About
            </Link>
            <Link to="/contact" className="btn btn-link">
              Contact
            </Link>
          </section>
        </header>
      </div>
    );
  }
}
