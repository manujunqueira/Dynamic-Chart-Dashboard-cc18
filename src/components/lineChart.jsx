// Importing the ChartComponent module, which acts as a wrapper for rendering charts using a library like Chart.js.
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
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
     // Chart data configuration
    scales: {
      y: {
         // Customizing y-axis ticks to prepend a dollar sign ('$') to each value.
        ticks: {
            callback: function(value, index, ticks) {
                return '$' + value; // Format y-axis labels as currency.
            }
        },
        title: {
            display: true,
            align: 'center',
            text: 'Profits',
            font: {
              family: 'Arial',
              size: 14,
              weight: 'bold',
            },
            padding: {
              top: 10,
              bottom: 5,
              left: 0,
              right: 0,
            },
          },      
        beginAtZero: true, // Ensure the y-axis begins at zero, regardless of data values.
      },
    },
  };
  return <ChartComponent type="line" data={chartData} options={chartOptions} />;
};

export default LineChart;