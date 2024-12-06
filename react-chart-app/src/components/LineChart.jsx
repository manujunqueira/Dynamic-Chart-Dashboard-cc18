import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Monthly Profits",
        data: data.profits,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: { beginAtZero: true },
    },
  };

  return <ChartComponent type="line" data={chartData} options={chartOptions} />;
};

export default LineChart;