import React, { useState } from "react";
import Footer from "./Footer";
import ReaderTools from "./ReaderTools";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  const [ligatures, setLigatures] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  if (isRootPath) {
    header = <a href="/">{title}</a>;
  } else {
    header = <a href="/">{title}</a>;
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
      <header className="glass shadow px-8 py-1 z-50 sticky top-0 flex flex-row items-center justify-between dark:bg-black">
        <div>{header}</div>
        <ReaderTools
          toggleLigatures={() => setLigatures(!ligatures)}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </header>

      <main className="mb-8 dark:bg-black">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
