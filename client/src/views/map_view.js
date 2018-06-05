class MapView{
  constructor(container){
    this.container = container;
    this.map = null;
  }


  initiliaze () {
    console.log('map init');
    const openStreetMapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const openStreetMapTileLayer = new L.TileLayer(openStreetMapUrl);

    this.map = L.map(this.container)
      .addLayer(openStreetMapTileLayer)
      .setView([51.505, -0.09], 13);
  }



  // initiliaze(){
  //   var map = L.map(this.container, {
  //       center: [51.505, -0.09],
  //       zoom: 13
  //   });
  //
  //   console.log(container);
  //
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);
  //
  //   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //     maxZoom: 18,
  //     id: 'mapbox.streets',
  //     accessToken: mapKey
  //   }).addTo(mymap);



  }
// };

module.exports = MapView;
