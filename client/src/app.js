const ItemListView = require('./views/item_list_view.js');
const Items = require('./models/items.js');
const ItemDetailView = require('./views/item_detail_view.js');
const TabsView = require('./views/tabs_view.js');
const MapView = require('./views/map_view.js');


document.addEventListener('DOMContentLoaded', () => {

    // const mapView = new MapView();
    //Here we first grab hold of the div on the bottom of the page where
    //we will render datas later on
    const mapContainer = document.querySelector('#item-map');
    const itemDetailDOM = document.querySelector('#item-detail-view');
    const itemTimelineDOM = document.querySelector('#item-timeline');
    //We grab hold of the listview which later will be the timeline
    const itemListDOM = document.querySelector('#item-list-view');
    const itemChartDOM = document.querySelector('#item-chart');

    const mapView = new MapView(mapContainer);
    mapView.initiliaze();

    const tabsView = new TabsView();
    tabsView.bindEvents();

    //We initiliaze both of the views with the views passed into them
    const itemListView = new ItemListView(itemListDOM);
    const itemDetailView = new ItemDetailView(itemDetailDOM);

    //This is the url for our localy created api MongoDB
    const url = 'http://localhost:3000/api/items'
    const items = new Items(url);

    //Here we set up all the pubsub subscribe and load data from the db
    itemDetailView.bindEvents();
    itemListView.bindEvents();
    items.bindEvents();
    items.getData();

});
