import React from "react";
import PieChartBall from "../../charts/PieChartBall";

function LeaveBox({ title, data, count, total }) {
  return (
    <div className="bg-[#FBFBFB] rounded-[10px] px-5 py-4 leavebalance_box text-left  ">
      <h3 className="text-sm font-normal text-[#333232] ">{title}</h3>
      <div className="flex items-baseline justify-between">
        <div className="text-[26px] text-[#333232] font-normal flex items-baseline gap-1">
          {count}{" "}
          <span className="text-[#AFAFAF] font-normal text-sm">/ {total}</span>
        </div>
        <PieChartBall data={data} />
      </div>
    </div>
  );
}

export default LeaveBox;
