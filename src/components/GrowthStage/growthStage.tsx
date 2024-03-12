import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";

type EChartsOption = echarts.EChartsOption;

const GrowthStage = () => {
  const colors = ["#5470C6", "#91CC75", "#EE6666"];

  const option: EChartsOption = {
    color: colors,

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {
      right: "20%",
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    legend: {
      data: ["Accum Rainfall", "NDVI", "Degree Days"],
      orient: "vertical",
      icon: "circle",
      left: 10,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        data: [
          //dias do mesmo mes e não meses do ano***
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Accum Rainfall",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFF",
          },
        },
        axisLabel: {
          formatter: "{value} ml",
        },
      },
      {
        type: "value",
        name: "NDVI",
        // position: "top",
        // alignTicks: true,
        // offset: 80,
        show: false,
        axisLine: {
          show: false,
          // lineStyle: {
          //   color: colors[1],
          // },
        },
        // axisLabel: {
        //   formatter: "{value} ml",
        // },
      },
      {
        type: "value",
        name: "Degree Days",
        position: "right",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#FFF",
          },
        },
        axisLabel: {
          formatter: "{value} °C",
        },
      },
    ],
    series: [
      {
        name: "Accum Rainfall",
        type: "bar",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        name: "NDVI",
        type: "line",
        stack: "Total",
        smooth: true,
        color: "#91CC75",
        lineStyle: {
          color: "#91CC75",
          width: 2,
          type: "dashed",
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(58, 225, 145)",
            },
            {
              offset: 1,
              color: "rgb(255, 255, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [40, 32, 50, 164, 90, 140, 250, 100, 90, 40, 20, 12],
      },
      {
        name: "Degree Days",
        type: "line",
        smooth: true,
        showSymbol: false,
        yAxisIndex: 2,
        color: "#fe7800",
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  };
  return (
    <div
      className="teste"
      style={{
        border: "2px solid",
        borderColor: "#FE7800",
        borderRadius: "20px",
        padding: "15px",
      }}
    >
      <ReactEcharts option={option} />
    </div>
  );
};

export default GrowthStage;

// const chartDom = document.getElementById("main")!;
//   const myChart = echarts.init(chartDom);

//   const yMax = 500;
//   const dataShadow: number[] = [];

//   const zoomSize = 6;
//   myChart.on("click", function (params) {
//     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//     myChart.dispatchAction({
//       type: "dataZoom",
//       startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//       endValue:
//         dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
//     });
//   });

//   option && myChart.setOption(option);

//   function fnGraphic() {
//     for (let i = 0; i < data.length; i++) {
//       dataShadow.push(yMax);
//     }
//     return dataShadow;
//   }

//   return { fnGraphic };
