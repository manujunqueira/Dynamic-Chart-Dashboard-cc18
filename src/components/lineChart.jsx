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
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
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
  return <ChartComponent type="line" data={chartData} options={chartOptions} />;
};

export default LineChart;