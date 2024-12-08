import ChartComponent from './ChartComponent'

const BubbleChart = ({ data }) => {
   // Chart data configuration for the bubble chart
    const bubbleChartData = {
      labels: data.expenses, // Labels for the x-axis representing expenses.
      datasets: [
            {
            label: 'Sales, Profits, Expenses',
            data: data.profits,
            backgroundColor: 'rgba(79,121,66, 0.2)',
            borderColor: 'rgba(79,121,66, 1)',
            borderWidth: 1,
          
            },
        ],
    };

       // Chart options configuration
const bubbleChartOptions = {
    scales: {
        // Configurations for the x-axis
        x: {
           // Customizing x-axis ticks to prepend a dollar sign ('$') to each value.
          ticks: {
              callback: function(value, index, ticks) {
                  return '$' + value;
              }
          },
           // Configuring the x-axis title
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
         // Configurations for the y-axis
        y: {
          min: Math.min(...data.sales),
          max: Math.max(...data.sales),
          ticks: {
              maxTicksLimit: 5,
              callback: function(value, index, ticks) {
                  return '$' + value;
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
              padding: {
                top: 10,
                bottom: 5,
                left: 0,
                right: 0,
              },
            },      
        },
      },
    };
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};


export default BubbleChart;

