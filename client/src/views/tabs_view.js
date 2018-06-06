const TabManager = require('../helpers/tab_manager.js');
const PubSub = require('../helpers/pub_sub.js')
//The class used to hide and display different views
//Notice this is the data part and the functions are in the helper file
class TabsView{
  constructor(){
    //First we set up an object with key value pairs of reference and #id
    const bottomViews = {
      "detail":"#item-detail-view",
      "chart":"#chart-container",
      "map":'#item-map'
    }
    //We new up a new tabManager with the object soo it can dynamicaly toggle its hides and shows
    this.bottomTabs = new TabManager(bottomViews);
    //This buttons for the control features
    this.detailButton = document.querySelector('#detail-button')
    this.mapButton = document.querySelector("#map-button")
    this.chartButton = document.querySelector('#chart-button')


}

  bindEvents(){
    //The first thing we want to display is the map, this is mostly for UX design
    this.bottomTabs.toggle('map');
    //Also we setup the eventlisteners for the buttons
    this.setupButtonListeners()
  }

  setupButtonListeners(){
    //The buttons are triggering the toggle for a specific tab
    this.detailButton.addEventListener('click',()=>{
      this.bottomTabs.toggle('detail')
    })

    this.mapButton.addEventListener('click',()=>{
      this.bottomTabs.toggle('map')
    })

    this.chartButton.addEventListener('click',()=>{
      this.bottomTabs.toggle('chart')
    })

  }








}

module.exports = TabsView;
