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
    this.container.innerHTML = ''
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

    const openStreetMapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const openStreetMapTileLayer = new L.TileLayer(openStreetMapUrl);

    this.map = L.map(displayContainer)
      .addLayer(openStreetMapTileLayer)
      .setView(item.coordinates, 3)

      this.addMarker(item.coordinates);
  }

  addMarker(coordinates) {
    L.marker(coordinates).addTo(this.map);
  }




  }

module.exports = MapView;
