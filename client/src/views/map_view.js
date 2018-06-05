const PubSub = require('../helpers/pub_sub.js');

class MapView{
  constructor(container){
    this.container = container;
    this.coordinates = null;
    this.map = null;
  }

  bindEvents(){
    this.setupDataListener();
  }

  setupDataListener(){
    PubSub.subscribe('Items:item-data-loaded',(evt)=>{this.initiliaze(evt.detail)});
  }

  initiliaze (item) {
    console.log(item.coordinates)
    if(this.map != null){
      this.map.remove();
    }

    // console.log('map init');
    const openStreetMapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const openStreetMapTileLayer = new L.TileLayer(openStreetMapUrl);

    this.map = L.map(this.container)
      .addLayer(openStreetMapTileLayer)
      .setView(item.coordinates, 13);

      this.addMarker(item.coordinates);
  }

  addMarker(coordinates) {
    L.marker(coordinates).addTo(this.map);
  }



  }

module.exports = MapView;
