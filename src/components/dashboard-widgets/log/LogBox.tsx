import React from "react";

function LogBox({
  img,
  logType,
  number,
  basis,
}: {
  img: string;
  logType: string;
  number: string;
  basis: string;
}) {
  return (
    <div
      className={` ${basis} text-center flex flex-col gap-2 justify-center items-center
    py-4 px-4 rounded-lg main-shadow `}
    >
      <img src={img} alt="log-info" />
      <h3 className="text-[#333333] font-semibold text-[13px] mt-1 whitespace-nowrap">
        {logType} logs
      </h3>
      <span className="text-[13px] font-normal text-[#595959] -mt-2 -mb-1">{number}</span>
    </div>
  );
}

export default LogBox;
