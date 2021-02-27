import React from "react";
import { Link } from "gatsby";
import Footer from "./Footer";
import ReaderTools from "./ReaderTools";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <Link to="/">
        {title}
      </Link>
    );
  } else {
    header = (
      <Link to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="glass shadow-md px-8 py-3 z-50 sticky top-0 flex flex-row justify-between">
        {header}
        <ReaderTools />
      </header>

      <main className="mb-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
