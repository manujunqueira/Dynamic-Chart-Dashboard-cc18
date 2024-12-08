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

export default ScatterChart;