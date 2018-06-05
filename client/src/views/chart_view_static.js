// const Highcharts = require('highcharts');
// // Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);
// class Chart {
//   constructor(view) {
//     this.view = view;
//   }
//   bindEvents(){
//     this.createChart();
//   }
//   // Create the chart using hard coded data
//   createChart() {
//     const chartContainer = document.querySelector('#chart-container');
//     const myChart = Highcharts.chart(chartContainer, {
//       chart: {
//         type: 'column'
//       },
//       xAxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//       },
//       title: {
//         text: 'Gold Prices By Month'
//       },
//       plotOptions: {
//         series: {
//           allowPointSelect: true
//         }
//       },
//       series: [{
//         name: 'Prices',
//         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
//       }]
//     });
//   };
// }
//
// module.exports = Chart;
