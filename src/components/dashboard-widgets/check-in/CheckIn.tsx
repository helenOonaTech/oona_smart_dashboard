import React, { useState } from "react";
import {
  checkInClock,
  checkInImg,
  customizeSettings,
  files,
  hands,
  userSettings,
} from "../../../assets";

function CheckIn({ onMouseDown, setEditDesign, disabled }) {
  const [showSettings, setShowSettings] = useState(false);
  console.log(showSettings);
  const handleClick = () => {
    setEditDesign(!disabled);
    setShowSettings(!showSettings);
  };
  return (
    <div className="bg-[#1C325E] text-white rounded-lg px-5 pt-6 w-full h-full checkin_widget relative">
      <h2 className="text-xl font-normal">Hi Emely,</h2>
      <p className="text-sm font-normal">
        you can now check in and start your work.
      </p>
      <button
        className="bg-[#73E6FF] w-fit py-[10px] px-7 rounded-xl text-[#1C325E] text-center font-normal text-sm mt-4 flex items-center justify-center gap-1"
        onClick={() => setEditDesign(!disabled)}
        onMouseDown={onMouseDown}
      >
        <img src={checkInClock} alt="" />
        Check in
      </button>
      <button
        className={`bg-white box_shadow w-[38px] h-[39px] outline-none  items-center justify-center rounded-[5px] cursor-pointer absolute -right-5 top-[70%] z-20 ${
          disabled ? "flex" : "hidden"
        }`}
        onClick={() => setShowSettings(!showSettings)}
        onMouseDown={onMouseDown}
      >
        <img src={customizeSettings} alt="" />
      </button>
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          showSettings ? " opacity-1" : "opacity-0"
        } absolute -right-5 top-[10%]`}
      >
        <button
          className="text-center rounded-[5px] bg-white box_shadow w-[68px] h-[58px] cursor-pointer"
          onClick={handleClick}
          onMouseDown={onMouseDown}
        >
          <img src={userSettings} alt="" className="m-auto  w-[35px] -mb-1" />
          <span className="text-[#3E3E3E] text-[11px] font-normal ">
            Customize
          </span>
        </button>
        <div className="text-center gap-3 py-2 bg-white box_shadow w-[68px] h-[58px] cursor-pointer rounded-[5px]">
          <img src={files} alt="" className="w-[25px] m-auto -mb-[3px]" />
          <span className="text-[#3E3E3E] text-[11px] font-normal">Files</span>
        </div>
        <div className="text-center py-2 gap-3 bg-white box_shadow cursor-pointer w-[68px] h-[58px] rounded-[5px]">
          <img src={hands} alt="" className="m-auto w-[30px] -mb-[6px]" />
          <span className="text-[#3E3E3E] text-[11px] font-normal">
            Employees{" "}
          </span>
        </div>
      </div>
      {/* <div className="text-center -mb-2">
        <img src={checkInImg} alt="" className="m-auto" />
      </div> */}
    </div>
  );
}

export default CheckIn;
