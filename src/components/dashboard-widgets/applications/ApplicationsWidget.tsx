import { PieChart, useDrawingArea } from "@mui/x-charts";
import React from "react";
import ApplicationTypes from "./ApplicationTypes";
import ProgressBar from "./ProgressBar";
import { styled } from "@mui/material/styles";

const data = [
  { value: 90, label: "EES", color: "#32C1FF" },
  { value: 50, label: "Attendance", color: "#F93E6B" },
  { value: 60, label: "Workforce", color: "#72FB89" },
];
const size = {
  width: 230,
  height: 120,
};
const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
}));

function PieCenterLabel({ lines }) {
  const { width, height, left, top } = useDrawingArea();
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  return (
    <>
      {lines.map((line, index) => (
        <StyledText
          key={index}
          x={centerX}
          y={centerY + index * 16} // Adjust line height as needed
          style={{ ...line.style, fill: line.color }}
        >
          {line.text}
        </StyledText>
      ))}
    </>
  );
}
function ApplicationsWidget({ onMouseDown }) {
  const lines = [
    {
      text: "Total",
      style: {
        fontWeight: "normal",
        transform: "translateY(-12px)",
      },
      color: "#A4A4A4",
    },
    {
      text: "200",
      style: {
        fontWeight: "bold",
        fontSize: "20px",
        transform: "translateY(-5px)",
      },
      color: "#333232",
    },
  ];
  return (
    <section className="  bg-white px-5 pt-6 w-full h-full overflow-x-hidden overflow-y-hidden relative">
      <h2 className="text-[#333232] font-bold text-sm flex items-center gap-1 mb-9">
        Applications
        <span className="text-[#A4A4A4] font-normal text-sm">(3)</span>
      </h2>
      <div className="app_chart flex items-center justify-between w-full gap-5 flex-col">
        <PieChart
          slotProps={{
            legend: { hidden: true },
          }}
          series={[{ data, innerRadius: 60, outerRadius: 40, paddingAngle: 0 }]}
          {...size}
        >
          <PieCenterLabel lines={lines} />
        </PieChart>
        <div className="flex justify-between items-center w-full">
          <div className="">
            <ApplicationTypes title="EES" color="bg-[#32C1FF]" />
            <ApplicationTypes title="Attendance" color="bg-[#F93E6B]" />
            <ApplicationTypes title="Workforce" color="bg-[#72FB89]" />
          </div>
          <div className="flex flex-col items-end gap-2 ml-2 mt-[-24px]">
            <div className="flex items-end justify-between gap-8">
              <div className="flex  items-center gap-1">
                <ProgressBar value="70" max="100" color="ees" />
                <span className="self-end text-[#AAAAAA] text-[9px]">70%</span>
              </div>
            </div>
            <div className="flex items-end gap-8">
              <div className="flex items-center gap-1 ">
                <ProgressBar value="40" max="100" color="attendance" />
                <span className="self-end text-[#AAAAAA] text-[9px] ">70%</span>
              </div>
            </div>
            <div className="flex items-end gap-8">
              <div className="flex  items-center gap-1">
                <ProgressBar value="80" max="100" color="workforce" />
                <span className="self-end text-[#AAAAAA] text-[9px]">70%</span>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full border border-[#E8E8E8] rounded-xl py-[10px] bg-[#FCFCFC] text-xs text-[#1A1D1F] font-normal text-center">
          All Application
        </button>
      </div>
    </section>
  );
}

export default ApplicationsWidget;
