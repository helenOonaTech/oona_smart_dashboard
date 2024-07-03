import React from "react";
import ReactApexcharts from "./index";

function ApexColumnChart({ labels, series, colors, title }) {
  var options = {
    series: [
      {
        data: [21, 22, 10],
      },
    ],
    chart: {
      type: "bar",
      events: {
        click: function () {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [""],

      // labels: {
      //   show: true,
      //   rotate: 0,
      //   rotateAlways: false,
      //   hideOverlappingLabels: true,
      //   showDuplicates: false,
      //   trim: false,
      //   minHeight: undefined,
      //   maxHeight: 120,
      //   style: {
      //     colors: [],
      //     fontSize: "12px",
      //     fontFamily: "Helvetica, Arial, sans-serif",
      //     fontWeight: 400,
      //     cssClass: "apexcharts-xaxis-label",
      //   },
      // },
    },
    yaxis: {
      min: 0,
      max: 100,
      stepSize: 25,
    },
  };
  return (
    <ReactApexcharts
      type="bar"
      height={220}
      width={510}
      options={options}
      series={series}
    />
  );
}

export default ApexColumnChart;
