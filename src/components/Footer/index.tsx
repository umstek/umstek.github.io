import React from "react";
import A from "../A";

export default () => (
  <footer className="border-t bg-gray-900">
    <div className="mx-32 mt-8 flex flex-row justify-between">
      <div className="flex flex-col">
        <A
          href="/tags/"
          className="hover:bg-gray-100 text-gray-400 hover:text-gray-900"
        >
          Tags
        </A>
        <A
          href="/disclaimer/"
          className="hover:bg-gray-100 text-gray-400 hover:text-gray-900"
        >
          Disclaimer
        </A>
        <A
          href="/about/"
          className="hover:bg-gray-100 text-gray-400 hover:text-gray-900"
        >
          About
        </A>
      </div>
      <div></div>
    </div>
    <div className="flex flex-col lg:flex-row font-light text-sm text-gray-300 justify-between">
      <p className="px-2 mx-32 mt-6 mb-2 lg:mb-8">
        Copyright © 2010 - 2021 Wickramaranga Abeygunawardhana.
      </p>
      <p className="px-2 mx-32 mt-2 lg:mt-6 mb-8">
        This blog is currently under development and will continue to be so
        indefinitely.
      </p>
    </div>
  </footer>
);
