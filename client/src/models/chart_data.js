const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
//This class is responsible for handling data between the expternal Gold Prices api  and the views//
class ChartData {
  constructor() {
  }
  //this method fetches the data from the API and tranforms it to X axis and Y axis and publishes for the Chart View to subscribe.
  getData(){
    const request = new Request('https://www.quandl.com/api/v1/datasets/WGC/GOLD_DAILY_GBP.json?api_key=eErY9cenLvxoqXMFyZwm');
    request.get()
    .then((chartData) => {
      const dataSeries = {};
      const xAxisData = chartData.data.map(dataSeries => dataSeries[0]);
      const yAxisData = chartData.data.map(dataSeries => dataSeries[1]);

      dataSeries.xAxis = xAxisData;
      dataSeries.yAxis = yAxisData;
      // console.log("tranfered data",dataSeries);
      // xAxisData.forEach((xAxis, i) => dataSeries[xAxis] = yAxisData[i]);
      PubSub.publish('ChartData-all-data-ready', dataSeries);
    })
    .catch(console.error);

  };
};


module.exports = ChartData;
