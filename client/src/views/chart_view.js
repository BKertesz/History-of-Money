const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);


class Chart {
  constructor(view) {
    this.view = view;
  }

  bindEvents(){
    this.setupChartListener();
  }

  //Listening till the chart_data model publishes all data then populate the chart
  setupChartListener(){
    PubSub.subscribe('ChartData-all-data-ready', (evt) => {
      this.createChart(evt.detail)
    });
  }


  // Create the chart

  createChart(data) {
// console.log(data.xAxis);
    const chartContainer = document.querySelector('#chart-container');

    const myChart = Highcharts.chart(chartContainer, {
      chart: {
        type: 'column'
      },
      xAxis: {
        categories: data.xAxis
      },
      title: {
        text: 'Gold Prices By Day'
      },
      plotOptions: {
        series: {
          allowPointSelect: true
        }
      },
      series: [{
        name: 'Prices',
        data: data.yAxis
      }]
    });

  };

}

module.exports = Chart;
