export function createApexChartOptions() {
  return {
    chart: {
      type: 'area',
      zoom: {
        autoScaleYaxis: true
      },
      toolbar: {
        show: false
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: ["#9B9DA9"],
      width: 2,
    },
    dataLabels: {
      enabled: true,
      formatter: function (value, { w }) {
        if (w.config.series[0].data.length !== 1)
          return "";
        return value;
      }
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 10,
      labels: {
        show: false,
      }
    },
    yaxis: {
      type: 'numeric',

    },
    fill: {
      colors: ["#CDD1DC"],
      type: 'gradient',
      gradient: {
        opacityFrom: 1,
        opacityTo: 0.7,
        stops: [0, 100]
      }
    }
  }
}

//
// chartOptions: {
//   chart: {
//     id: 'area-datetime',
//       type: 'area',
//       height: 350,
//       zoom: {
//       autoScaleYaxis: true
//     }
//   },
//   annotations: {
//     yaxis: [{
//       y: 30,
//       borderColor: '#999',
//       label: {
//         show: true,
//         text: 'Support',
//         style: {
//           color: "#fff",
//           background: '#00E396'
//         }
//       }
//     }],
//       xaxis: [{
//       x: new Date('14 Nov 2012').getTime(),
//       borderColor: '#999',
//       yAxisIndex: 0,
//       label: {
//         show: true,
//         text: 'Rally',
//         style: {
//           color: "#fff",
//           background: '#775DD0'
//         }
//       }
//     }]
//   },
//   dataLabels: {
//     enabled: false
//   },
//   markers: {
//     size: 0,
//       style: 'hollow',
//   },
//   xaxis: {
//     type: 'datetime',
//       min: new Date('01 Mar 2012').getTime(),
//       tickAmount: 6,
//   },
//   tooltip: {
//     x: {
//       format: 'dd MMM yyyy'
//     }
//   },
//   fill: {
//     type: 'gradient',
//       gradient: {
//       shadeIntensity: 1,
//         opacityFrom: 0.7,
//         opacityTo: 0.9,
//         stops: [0, 100]
//     }
//   },
// },
