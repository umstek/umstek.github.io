import React from "react";

export default ({
  readingTime,
  className,
}: {
  readingTime: string;
  className?: string;
}) => (
  <p
    className={["text-center text-gray-600", className]
      .filter((c) => !!c)
      .join(" ")}
  >
    ⏲ {readingTime}
  </p>
);
