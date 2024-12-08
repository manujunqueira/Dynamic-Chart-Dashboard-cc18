import ChartComponent from "./ChartComponent";

const BarChart = ({ data }) => {
   // Chart data configuration
    const barChartData = {
        labels: data.months, // Labels for the x-axis, representing the months
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

     // Chart configuration options
    const barChartOptions = {
        scales: {
            y: {
              ticks: {
                  callback: function(value, index, ticks) {
                      return '$' + value; // Format the y-axis labels as currency.
                  }
              },
              // Configuring the y-axis title
              title: {
                  display: true,
                  align: 'center',
                  text: 'Sales',
                  font: {
                    family: 'Arial',
                    size: 14,
                    weight: 'bold',
                  },
                  // Padding around the title text.
                  padding: {
                    top: 10,
                    bottom: 5,
                    left: 0,
                    right: 0,
                  },
                },      
              beginAtZero: true,  // Ensure the y-axis begins at zero, regardless of data values.
            },
          },
        };

        // Rendering the ChartComponent with 'bar' type, configured data, and options.
    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;
