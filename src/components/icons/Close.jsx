import React from "react";

function Close({ color1, color2 }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1638 1.49414L1.48535 15.1726"
        stroke={color1}
        stroke-width="2.1"
      />
      <path
        d="M15.1641 15.1726L1.48562 1.49414"
        stroke={color2}
        stroke-width="2.1"
      />
    </svg>
  );
}

export default Close;
