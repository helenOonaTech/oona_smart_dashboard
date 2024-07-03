import { PieChart } from "@mui/x-charts";
import React from "react";

function PieChartBall({ data, width, height }: any) {
  return (
    <PieChart
      height={200}
      width={260}
      series={[
        {
          data: data,
          innerRadius: 70,
          outerRadius: 100,
          paddingAngle: 0,
          cornerRadius: 0,
          startAngle: -90,
          endAngle: 90,
          cx: 151,
          cy: 170,
        },
      ]}
    />
  );
}

export default PieChartBall;
