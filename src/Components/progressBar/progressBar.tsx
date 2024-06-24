// components/ProgressBar.js
import React from "react";

const ProgressBar = ({
  color = "bg-primary",
  value = 0,
  total = 100,
}: {
  color?: string;
  value?: number;
  total?: number;
}) => {
  // Calculate the percentage completion
  const percentage = (value / total) * 100;

  return (
    <div className=" flex gap-4 items-center">
      <div className="h-2 bg-gray-200 flex-1 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} w-10 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="font-medium text-xs">{`${value.toFixed(2)}`}</div>
    </div>
  );
};

export default ProgressBar;
