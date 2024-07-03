"use client";
import ReactApexcharts from "./index";

function ApexBarChart({ series, colors }) {
  // var options = {
  //   series: [
  //     {
  //       data: [80, 74, 88, 60],
  //     },
  //   ],
  //   chart: {
  //     type: "bar",
  //     height: 350,
  //     width: "300",
  //   },
  //   plotOptions: {
  //     bar: {
  //       borderRadius: 4,
  //       horizontal: true,
  //     },
  //   },
  //   colors: ["#008FFB", "#FF4560"],
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   xaxis: {
  //     categories: [
  //       `Senior Managers`,
  //       `Assistant Managers`,
  //       "Assistant Managers",
  //       "Assistant Managers",
  //     ],
  //   },
  // };

  var options = {
    series: [
      {
        data: [80, 74, 88, 60],
      },
    ],
    chart: {
      type: "bar",
      // height: 350,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        borderRadius: 4,
        horizontal: true,
        barHeight: "100%",
        // dataLabels: {
        //   position: "bottom",
        // },
      },
    },
    colors: ["#9BFFE1", "#20B1BA", "#FF9E9E", "#FFCB56"],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
    },
    stroke: {
      width: 2,
      colors: ["#fff"],
    },
    xaxis: {
      labels: {
        show: false,
      },
      categories: [
        `Senior Managers`,
        `Assistant Managers`,
        "Assistant Managers",
        "Assistant Managers",
      ],
    },
    yaxis: {
      labels: {
        show: true,
        maxWidth: 80,
      },
    },

    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };
  return (
    <ReactApexcharts
      type="bar"
      height={230}
      width={310}
      options={options}
      series={series}
    />
  );
}

export default ApexBarChart;
