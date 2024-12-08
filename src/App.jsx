import React, { useState, useEffect } from "react";
import BarChart from "./components/barChart";
import LineChart from "./components/lineChart";
import ScatterChart from "./components/scatterChart";
import BubbleChart from "./components/bubbleChart";
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null);


  useEffect(() => {
    fetch("/financial_data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!chartData) return <div>Loading...</div>;
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Interactive Charts with React and Chart.js</h1>
      <hr></hr>
      <h2>Financial Data Dashboard</h2>
      <BarChart data={chartData} />
      <br></br>
      <LineChart data ={chartData} />
      <br></br>
      <ScatterChart data ={chartData} />
      <br></br>
      <BubbleChart data ={chartData} />
      
    </div>
  );
};

export default App
