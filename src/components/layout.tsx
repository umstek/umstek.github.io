import React from "react";
import { Link } from "gatsby";

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
      <main>{children}</main>
      <footer className="mt-8 border-t bg-gray-800">
        <div className="mx-32 my-8 flex flex-row">
          <div className="flex flex-col">
            <a
              className="my-1 px-2 hover:bg-gray-100 text-gray-400 hover:text-gray-800 transition-colors"
              href="/tags/"
            >
              Tags
            </a>
            <a
              className="my-1 px-2 hover:bg-gray-100 text-gray-400 hover:text-gray-800 transition-colors"
              href="/disclaimer/"
            >
              Disclaimer
            </a>
            <a
              className="my-1 px-2 hover:bg-gray-100 text-gray-400 hover:text-gray-800 transition-colors"
              href="/about/"
            >
              About
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-row font-light text-sm text-gray-300">
          <div className="mx-32 my-6">
            Copyright © 2010 - 2021 Wickramaranga Abeygunawardhana
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
