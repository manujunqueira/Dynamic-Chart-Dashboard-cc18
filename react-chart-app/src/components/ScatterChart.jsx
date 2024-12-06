import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Expenses vs Profits",
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={chartOptions} />;
};

export default ScatterChart;