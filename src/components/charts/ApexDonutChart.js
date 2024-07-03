// ** MUI Imports
// import { useTheme } from "@mui/material/styles";

// ** Component Import
import ReactApexcharts from "./index";

const ApexDonutChart = ({ labels, series, colors, title, width, height }) => {
  // ** Hook
  // const theme = useTheme();
  // let tt = 0;
  //   useEffect(() => {}, [total]);
  const options = {
    stroke: { width: 0 },
    labels: labels,
    colors: colors,
    dataLabels: {
      enabled: labels.length > 0 ? true : false,
      style: {
        fontSize: "15px",
      },
      formatter: (val) => `${parseInt(val, 10)}`,
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      height: "20",
      // labels: { colors: theme.palette.text.secondary },
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
        customScale: 0.7,
        // size: 200,
        donut: {
          size: "55%",
          labels: {
            show: false,
            name: {
              fontSize: "10px",
            },
            value: {
              fontSize: "10px",
              // color: theme.palette.text.secondary,
              formatter: (val) => `${parseInt(val, 10)}`,
            },
            total: {
              show: false,
              fontSize: "1.2rem",
              //   label: label,
              //   value: total,
              // color: theme.palette.text.primary,
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
      height={height ? height : 400}
      width={width ? width : 300}
      options={options}
      series={series}
    />
  );
};

export default ApexDonutChart;
