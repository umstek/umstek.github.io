import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "spectre.css";

import Navbar from "./components/Navbar";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import ProjectsPage from "./pages/projects";
import HomePage from "./pages/home";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/projects" component={ProjectsPage} />
          </div>
        </div>
      </Router>
    );
  }
}
