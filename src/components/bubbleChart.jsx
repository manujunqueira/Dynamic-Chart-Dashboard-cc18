import ChartComponent from './ChartComponent'

const BubbleChart = ({ data }) => {
    const bubbleChartData = {
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

const bubbleChartOptions = {
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
          min: Math.min(...data.sales),
          max: Math.max(...data.sales),
          ticks: {
              maxTicksLimit: 5,
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
        },
      },
    };
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};


export default BubbleChart;

