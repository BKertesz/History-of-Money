const PubSub = require('../helpers/pub_sub.js');
//The map class based on leaflet that renders our map on the screen
class MapView{
  constructor(container){
    this.container = container;
    this.coordinates = null;
    this.map = null;
  }

  bindEvents(){
    this.setupDataListener();
  }
  //This makes sure the data is ready for the map to render
  setupDataListener(){
    PubSub.subscribe('Items:item-data-loaded',(evt)=>{this.initiliaze(evt.detail)});
  }
  //This function that creates the map itself
  //The passed in item is each invidual item from the database
  initiliaze (item) {
    //First we empty the container to make sure its properly displayed
    this.container.innerHTML = ''
    //This bit is used to make sure the map is emptied if it been already used before
    if(this.map != null){
      this.map.remove();
    }
    //This block is just for display generation
    const title = document.createElement('h1');
    title.textContent = `Origin place of the ${item.name}`;
    this.container.appendChild(title);
    //This is similar to the previous block generates our dynamic details
    const description = document.createElement('p');
    description.textContent = `${item.description}`;
    this.container.appendChild(description);
    //This line is just to create some space between the details and the map
    const breakLine = document.createElement('br')
    this.container.appendChild(breakLine);
    //This is a new container for the map to be initiliazed in
    const displayContainer = document.createElement('div');
    displayContainer.id = 'item-map-container'
    this.container.appendChild(displayContainer);
    //The url is refears to our API where we pull the map and location from
    const openStreetMapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    //We new up a class with the url and the assign it a layer type as class
    const openStreetMapTileLayer = new L.TileLayer(openStreetMapUrl);
    //We load the invidual cordinates and zooming levels here
    this.map = L.map(displayContainer)
      .addLayer(openStreetMapTileLayer)
      .setView(item.coordinates, 3)
      //The marker is placed by this function
      this.addMarker(item.coordinates);
  }
  //A built in function to place the marker on the map
  addMarker(coordinates) {
    L.marker(coordinates).addTo(this.map);
  }




  }

module.exports = MapView;
