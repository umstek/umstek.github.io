import React from "react";

const Tag = ({
  name,
  link,
  count,
}: {
  name: string;
  link?: string;
  count?: number;
}) => {
  const wrapperClassName = count ? "my-4" : "my-1 text-sm";
  const anchorClassName = count ? "pl-4" : "px-4";

  return (
    <div className={["mx-2", wrapperClassName].join(" ")}>
      <a
        className={[
          "py-1 hover:bg-blue-600 transition-colors cursor-pointer text-blue-600 hover:text-blue-100 rounded-full",
          anchorClassName,
        ].join(" ")}
        href={link}
      >
        <span>{name}</span>
        {count && (
          <span className="py-1 ml-2 px-4 rounded-full border-blue-600 border-blue-600 bg-blue-600 text-blue-100">
            {count}
          </span>
        )}
      </a>
    </div>
  );
};

export default Tag;
