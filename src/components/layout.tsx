import React from "react";
import { Link } from "gatsby";
import Footer from "./Footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="glass opacity-70 shadow-md p-4 z-50 sticky top-0">
        {header}
      </header>
      <main className="mb-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
