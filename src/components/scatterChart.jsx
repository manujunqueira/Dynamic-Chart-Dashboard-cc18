import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Expenses vs Profits",  // Label for the dataset, displayed in the legend.
        data: data.expenses.map((expense, index) => ({
          x: expense, // The x-coordinate represents an expense value.
          y: data.profits[index], // The y-coordinate represents the corresponding profit value.
        })),
        backgroundColor: "rgba(54, 162, 235, 0.5)",  // Color of the data points, with transparency.
      },
    ],
  };

   // Configuring chart options
  const chartOptions = {
    scales: {
      x: {
          ticks: {
              callback: function(value, index, ticks) {
                  return '$' + value;
              }
          },
          title: {
              display: true,
              align: 'center',
              text: 'Expenses',
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

        },
    y: {
      ticks: {
         // Format the y-axis tick labels as currency.
          callback: function(value, index, ticks) {
              return '$' + value;
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
      beginAtZero: true,
    },
  },
};
  return <ChartComponent type="scatter" data={chartData} options={chartOptions} />;
};

// Exporting the ScatterChart component to make it reusable in other parts of the application.
export default ScatterChart;