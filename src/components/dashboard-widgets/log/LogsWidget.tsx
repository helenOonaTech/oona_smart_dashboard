import React from "react";
import { errorIcon, infoIcon, warningIcon } from "../../../assets";
import LogBox from "./LogBox";

function LogsWidget() {
  return (
    <section className="  bg-white px-5 pt-6 w-full h-full overflow-x-hidden overflow-y-hidden relative">
      <h2 className="text-[#333232] font-bold text-sm flex items-center gap-1 mb-9">
        Logs
        <span className="text-[#A4A4A4] font-normal text-sm">(3)</span>
      </h2>
      <div className="flex items-center justify-between gap-12 mt-3">
        <div className="text-left flex flex-col ">
          <h2 className="text-[30px] mb-[-8px] font-bold text-[#333232]">
            164
          </h2>
          <span className="text-[12px]  text-[#4B465C] font-normal whitespace-nowrap">
            Total logs
          </span>
        </div>
        <div className="flex justify-left gap-y-5 gap-x-7 flex-wrap ">
          <LogBox
            img={warningIcon}
            logType="Warning"
            number="20"
            basis="basis-[40%]"
          />
          <LogBox
            img={errorIcon}
            logType="Error"
            number="20"
            basis="basis-[40%]"
          />
          <LogBox
            img={infoIcon}
            logType="Info"
            number="20"
            basis="basis-[89%]"
          />
        </div>
      </div>
    </section>
  );
}

export default LogsWidget;
