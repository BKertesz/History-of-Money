class MapView{
  constructor(container, coordinates){
    this.container = container;
    this.coordinates = coordinates;
    this.map = null;
  }


  initiliaze () {
    // console.log('map init');
    const openStreetMapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const openStreetMapTileLayer = new L.TileLayer(openStreetMapUrl);

    this.map = L.map(this.container)
      .addLayer(openStreetMapTileLayer)
      .setView([51.505, -0.09], 13);
  }

  addMarker() {
    L.marker(coordinates).addTo(this.map);
  }



  }

module.exports = MapView;
