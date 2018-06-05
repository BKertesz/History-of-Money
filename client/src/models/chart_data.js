const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
//This class is responsible for handling data between the api db and the views//
class ChartData {
  constructor() {
    // this.xAxisData = [];
    // this.yAxisData = [];
  }

getData(){
  const request = new Request('https://www.quandl.com/api/v1/datasets/WGC/GOLD_DAILY_GBP.json');
  request.get()
  .then((chartData) => {
    PubSub.publish('ChartData-all-data-ready', chartData);
    // console.log(chartData.data);
  })
  .catch(console.error);
};

  getXAxisData(){
    const request = new Request('https://www.quandl.com/api/v1/datasets/WGC/GOLD_DAILY_GBP.json');
    request.get()
    .then((chartData) => {
      const xAxisData = chartData.data.map(dataSeries => dataSeries[0]);
      const yAxisData = chartData.data.map(dataSeries => dataSeries[1]);
      // console.log(xAxisData);
      // console.log(yAxisData);
    })
    return xAxisData;
  }
  console.log(getXAxisData().xAxisData);
}


module.exports = ChartData;
