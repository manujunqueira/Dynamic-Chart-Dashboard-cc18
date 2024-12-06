import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null);


  useEffect(() => {
    fetch("/data/financial_data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Dynamic Chart Dashboard</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};

export default App
