const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts');
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

//This class is responsible for the chart display
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
  // Create the chart by accessing the X and Y axis data from the Chart_data model.
  createChart(data) {
    const chartContainer = document.querySelector('#chart-container');

    const title = document.createElement('h2');
    title.textContent = 'Why Look at Historical Gold Prices?'
    const description = document.createElement('p')
    description.textContent = 'Looking at historical gold prices may potentially provide information that may assist in buying or selling decisions. Looking at the big picture, gold trended higher for many years before making all-time highs in 2011 of nearly £1180 per ounce. Gold has since been moving lower, but could have possibly found a bottom in 2016. Although it remains to be seen, gold’s declines from the 2011 highs could simply prove to be a pullback within an even longer-term uptrend.'

    chartContainer.appendChild(title);
    chartContainer.appendChild(description);

    const  displayContainer = document.createElement('div');
    chartContainer.appendChild(displayContainer)

    //This part generates the actual chart and pulls in the data from the api
    const myChart = Highcharts.chart(displayContainer, {
      chart: {
        type: 'column',
        backgroundColor:`rgba(255, 255, 255, 0.0)`
      },
      xAxis: {
        categories: data.xAxis
      },
      title: {
        text: 'Daily Gold Price in £(GBP)'
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          color: '#FFD700'
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
