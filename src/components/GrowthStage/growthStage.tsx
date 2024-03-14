import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import { useEffect, useState } from "react";
import "./style.css";

type EChartsOption = echarts.EChartsOption;
type DataApi = {
  degree_days: number;
  ndvi: number;
  precipitation: number;
  time: number;
};

const GrowthStage = () => {
  const [data, setData] = useState<DataApi[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/alexanderboliva/test/main/api_example.json"
    )
      .then((r) => r.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const dateConvert = (ele: number) => {
    const formatted: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "2-digit",
    };

    const time = new Date(ele * 1000).toLocaleDateString("pt-BR", formatted);
    return time;
  };

  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          align: "center",
        },
      },
    },
    grid: {
      left: "5%",
      top: "25%",
      right: "5%",
    },
    legend: {
      data: ["Accum Rainfall", "Degree Days", "NDVI"],
      orient: "vertical",
      icon: "circle",
      left: 1,
      align: "left",
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
        data: data.map((ele) => dateConvert(ele.time)),
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Accum Rainfall",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#FFF",
          },
        },
        axisLabel: {
          formatter: "{value} mm",
        },
      },
      {
        type: "value",
        name: "NDVI",
        position: "top",
        show: false,
        axisLine: {
          show: true,
        },
      },
      {
        type: "value",
        name: "Degree Days",
        position: "right",
        alignTicks: true,
        axisLine: {
          show: false,
          lineStyle: {
            color: "#FFF",
          },
        },
        axisLabel: {
          formatter: "{value} °C",
        },
      },
    ],
    dataZoom: [
      {
        startValue: "2014-06-01",
      },
      {
        type: "inside",
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
        data: data.map((dt) => dt.precipitation),
      },
      {
        name: "NDVI",
        type: "line",
        yAxisIndex: 1,
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
        data: data.map((dt) => dt.ndvi),
      },
      {
        name: "Degree Days",
        type: "line",
        smooth: true,
        showSymbol: false,
        yAxisIndex: 2,
        color: "#fe7800",
        data: data.map((dt) => dt.degree_days),
      },
    ],
  };

  return (
    <div
      className="teste"
      style={{
        width: "100%",
      }}
    >
      <ReactEcharts
        option={option}
        style={{ height: "500px", padding: "5px" }}
      />
    </div>
  );
};

export default GrowthStage;
