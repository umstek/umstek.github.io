import React, { useState } from "react";
import SettingsIcon from "../icons/Settings";
import ShareIcon from "../icons/Share";

interface IReaderToolsProps {
  toggleLigatures: () => void;
  toggleDarkMode: () => void;
}

const ReaderTools = (props: IReaderToolsProps) => {
  const [shareVisible, setShareVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);

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
        onClick={() => setSettingsVisible(!settingsVisible)}
        className="w-8 h-8 rounded-full p-2 text-black hover:bg-black hover:text-white"
        title="Settings"
      >
        <SettingsIcon />
      </button>

      <div
        className={[
          "glass origin-top-right absolute right-0 mt-1 sm:rounded-bl-lg shadow",
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
          aria-labelledby="share-menu"
        >
          <div className="block px-4 py-2 text-sm" role="menuitem">
            <div className="addthis_inline_share_toolbox_ajiu"></div>
          </div>
        </div>
      </div>

      <div
        className={[
          "glass origin-top-right absolute right-0 mt-1 sm:rounded-bl-lg shadow",
          "transform transition-all duration-100 w-full sm:w-auto flex flex-row justify-center",
          settingsVisible
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
          aria-labelledby="settings-menu"
        >
          <div className="block px-4 py-2 text-sm" role="menuitem">
            <button
              className="p-2 hover:bg-blue-600 transition-colors cursor-pointer text-blue-600 hover:text-blue-100 rounded-md"
              onClick={props.toggleLigatures}
            >
              Toggle Ligatures
            </button>
            <button
              className="p-2 hover:bg-blue-600 transition-colors cursor-pointer text-blue-600 hover:text-blue-100 rounded-md"
              onClick={props.toggleDarkMode}
            >
              Toggle Dark Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReaderTools;
