import React from "react";

function ProgressBar({
  color,
  value,
  max,
}: {
  color: String;
  value: String;
  max: String;
}) {
  return (
    <div className="progress-bar__wrapper">
      <progress
        className={`${color}`}
        id="progress-bar"
        value={`${value}`}
        max={`${max}`}
      ></progress>
    </div>
  );
}

export default ProgressBar;
