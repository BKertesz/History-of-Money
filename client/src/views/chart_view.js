const Highcharts = require('highcharts');

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

class Chart {
  constructor(view) {
    this.view = view;
  }

  bindEvents(){
    this.createChart();
  }
  // Create the chart

  createChart() {

    const chartContainer = document.querySelector('#chart-container');

    const myChart = Highcharts.chart(chartContainer, {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });

  };

}

module.exports = Chart;
