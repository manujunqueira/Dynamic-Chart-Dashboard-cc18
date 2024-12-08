// Importing necessary modules and components
import React, { useState, useEffect } from "react";
import BarChart from "./components/barChart";
import LineChart from "./components/lineChart";
import ScatterChart from "./components/scatterChart";
import BubbleChart from "./components/bubbleChart";
import './App.css'

function App() {
   // Declaring a state variable to store the chart data, initialized to null.
  const [chartData, setChartData] = useState(null);


  useEffect(() => { // Using the useEffect hook to fetch financial data when the component is mounted.
    fetch("/financial_data.json")
     // Fetching financial data from a JSON file located at "/financial_data.json".
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); //Empty dependency array ensures this effect runs only once on mount.

  // Displaying a loading message while the data is being fetched.
  if (!chartData) return <div>Loading...</div>;
  
  // Rendering the dashboard once data is available.
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
