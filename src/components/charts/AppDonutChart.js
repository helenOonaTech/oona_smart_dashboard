// ** MUI Imports
"use client";
import { useTheme } from "@mui/material/styles";

// ** Component Import
import ReactApexcharts from "./index";

const AppDonutChart = ({ labels, series, colors }) => {
  // ** Hook
  const theme = useTheme();
  let tt = 0;
  //   useEffect(() => {}, [total]);
  const options = {
    stroke: { width: 0 },
    labels: labels,
    colors: colors,

    dataLabels: {
      enabled: false,
      style: {
        fontSize: "25px",
      },
      formatter: (val) => `${parseInt(val, 10)}`,
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
      position: "right",
      horizontalAlign: "center",
      height: "",
      labels: { colors: theme.palette.text.secondary },
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        customScale: 0.6,
        // size: 200,
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "35px",
            },
            value: {
              fontSize: "40px",
              offsetY: "20",
              fontWeight: "900",
              color: "#333232",
              formatter: (val) => `${parseInt(val, 10)}`,
            },
            total: {
              show: true,
              fontSize: "1.6rem",

              //   label: label,
              label: "Total",
              color: "#A4A4A4",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "1rem",
                  },
                  value: {
                    fontSize: "1rem",
                  },
                  total: {
                    fontSize: "1rem",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  return (
    <ReactApexcharts
      type="donut"
      height={260}
      width={300}
      options={options}
      series={series}
    />
  );
};

export default AppDonutChart;
