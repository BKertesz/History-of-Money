const PubSub = require('../helpers/pub_sub.js');

class MapView{
  constructor(container){
    this.container = container;
    this.coordinates = null;
    this.map = null;
    this.item = null;
  }

  bindEvents(){
    this.setupDataListener();
  }

  setupDataListener(){
    PubSub.subscribe('Items:item-data-loaded',(evt)=>{this.initiliaze(evt.detail)});
  }

  initiliaze (item) {
    this.item = item;
    this.container.innerHTML = ''
    // console.log(item.coordinates)
    if(this.map != null){
      this.map.remove();
    }

    const title = document.createElement('h1');
    title.textContent = `Origin place of the ${item.name}`;
    this.container.appendChild(title);

    const description = document.createElement('p');
    description.textContent = `${item.description}`;
    this.container.appendChild(description);

    const breakLine = document.createElement('br')
    this.container.appendChild(breakLine);

    const displayContainer = document.createElement('div');

    displayContainer.id = 'item-map-container'
    this.container.appendChild(displayContainer);
    // console.log('map init');
    const openStreetMapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const openStreetMapTileLayer = new L.TileLayer(openStreetMapUrl);

    this.map = L.map(displayContainer)
      .addLayer(openStreetMapTileLayer)
      .setView(item.coordinates, 3)

      // this.map.setView(item.coordinates,3)

      this.addMarker(item.coordinates);
      // this.addMarker(item.coordinates);

      // console.log(this.map);
  }

  addMarker(coordinates) {
    L.marker(coordinates).addTo(this.map);
  }




  }

module.exports = MapView;
