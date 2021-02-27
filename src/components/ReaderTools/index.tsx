import React, { useState } from "react";
import SettingsIcon from "../icons/Settings";
import ShareIcon from "../icons/Share";

interface IReaderToolsProps {}

const ReaderTools = (prop: IReaderToolsProps) => {
  const [shareVisible, setShareVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShareVisible(!shareVisible)}
        className="w-8 h-8 rounded-full p-2 text-black hover:bg-black hover:text-white"
        title="Share post"
      >
        <ShareIcon />
      </button>
      <button
        className="w-8 h-8 rounded-full p-2 text-black hover:bg-black hover:text-white"
        title="Settings"
      >
        <SettingsIcon />
      </button>

      <div
        className={[
          "origin-top-right absolute right-0 mt-3 sm:rounded-bl-lg shadow-md bg-white",
          "transform transition-all duration-100 w-full sm:w-auto flex flex-row justify-center",
          shareVisible
            ? "translate-y-0"
            : "-translate-y-12 opacity-0 invisible",
        ]
          .filter((c) => !!c)
          .join(" ")}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="block px-4 py-2 text-sm" role="menuitem">
            <div className="s9-widget-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReaderTools;
