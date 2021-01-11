import React from "react";

export default ({ date, className }: { date: string; className?: string }) => (
  <p
    className={["text-center uppercase text-gray-600", className]
      .filter((c) => !!c)
      .join(" ")}
  >
    {date}
  </p>
);
