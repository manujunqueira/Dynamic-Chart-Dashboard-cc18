import ChartComponent from "./ChartComponent";

const BarChart = ({ data }) => {
    const barChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barChartOptions = {
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
                  text: 'Sales',
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

    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;
