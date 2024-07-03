import React from "react";

function ApplicationTypes({ color, title }: { color: String; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span
        className={`${color} w-[11px] h-[11px] rounded-full inline-block`}
      ></span>
      <p className="text-[#A4A4A4] text-[14px]">{title}</p>
    </div>
  );
}

export default ApplicationTypes;
