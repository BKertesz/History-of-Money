const ItemListView = require('./views/item_list_view.js');
const Items = require('./models/items.js');
const ChartData = require('./models/chart_data.js');
const ItemDetailView = require('./views/item_detail_view.js');
const Chart = require('./views/chart_view.js');


document.addEventListener('DOMContentLoaded', () => {
    //Here we first grab hold of the div on the bottom of the page where
    //we will render datas later on
    const itemDetailDOM = document.querySelector('#item-detail-view');
    //We grab hold of the listview which later will be the timeline
    const itemListDOM = document.querySelector('#item-list-view');
// We grab the Chartview div for chartView
    const chartViewDOM = document.querySelector('#chart-container');
    //We initiliaze both of the views with the views passed into them
    const itemListView = new ItemListView(itemListDOM);
    const itemDetailView = new ItemDetailView(itemDetailDOM);
    //To create the chart view
    const chartView = new Chart(chartViewDOM);
    //This is the url for our localy created api MongoDB
    const url = 'http://localhost:3000/api/items'
    const items = new Items(url);
      //This is the url for the Chart data API
    const chartApiUrl = 'https://www.quandl.com/api/v1/datasets/WGC/GOLD_DAILY_GBP.json?api_key=eErY9cenLvxoqXMFyZwm'
    const chartData = new ChartData(chartApiUrl);

    //Here we set up all the pubsub subscribe and load data from the db
    itemDetailView.bindEvents();
    itemListView.bindEvents();
    items.bindEvents();
    items.getData();
    chartView.bindEvents();
    chartData.getData();

});
