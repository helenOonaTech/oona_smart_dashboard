import React, { useState } from "react";
// import ApexCharts from "apexcharts";
// import Chart from "react-apexcharts";
import { PieChart } from "@mui/x-charts";
const data2 = [
  { label: "In", value: 8, color: "#07E7CF" },
  { label: "Out", value: 3, color: "#FF5E53" },
  { label: "Break", value: 1, color: "#FFCC47" },
];
function CurrentDayStatus() {
  return (
    <section className="px-5 pt-6 w-full h-full overflow-x-hidden overflow-y-hidden relative bg-white current_day">
      <h2 className="text-[#333232] font-bold text-sm flex items-center gap-1 mb-12">
        Current Day Status
      </h2>
      <div className="flex items-center">
        <div>
          {" "}
          <PieChart
            height={250}
            width={280}
            series={[
              {
                data: data2,
                innerRadius: 60,
                outerRadius: 100,
                paddingAngle: 0,
                cornerRadius: 0,
                startAngle: 90,
                endAngle: -360,
                cx: 151,
                cy: 170,
              },
            ]}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        </div>
        <ul className="!flex flex-col !gap-6 !-ml-8 !-mt-16">
          {data2.map((item) => (
            <li className="flex items-center justify-between gap-8 !h-fit">
              <span className="flex items-center gap-2 text-xs text-[#333232] font-normal">
                <span
                  className="w-[12px] h-[12px] rounded-full inline-block "
                  style={{
                    background: item.color,
                  }}
                ></span>
                {item.label}
              </span>
              <span className=" text-xs text-[#333232] font-normal">
                {item.value}h
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CurrentDayStatus;
