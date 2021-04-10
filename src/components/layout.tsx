import React, { useState } from "react";
import { Link } from "gatsby";
import Footer from "./Footer";
import ReaderTools from "./ReaderTools";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  const [ligatures, setLigatures] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  if (isRootPath) {
    header = <Link to="/">{title}</Link>;
  } else {
    header = <Link to="/">{title}</Link>;
  }

  return (
    <div
      className={[
        !ligatures && "no-ligatures",
        darkMode ? "dark" : "light",
        "transition duration-100",
      ]
        .filter((f) => !!f)
        .join(" ")}
      data-is-root-path={isRootPath}
    >
      <header className="glass shadow-md px-8 py-3 z-50 sticky top-0 flex flex-row justify-between dark:bg-black">
        {header}
        <ReaderTools
          toggleLigatures={() => setLigatures(!ligatures)}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </header>

      <main className="mb-8 dark:bg-black">{children}</main>
      <div className="addthis_inline_share_toolbox_ajiu"></div>
      <Footer />
    </div>
  );
};

export default Layout;
