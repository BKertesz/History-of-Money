const TabManager = require('../helpers/tab_manager.js');
const PubSub = require('../helpers/pub_sub.js')

class TabsView{
  constructor(){

    const bottomViews = {
      "detail":"#item-detail-view",
      "chart":"#chart-container",
      "map":'#item-map'
    }

    this.detailButton = document.querySelector('#detail-button')
    this.mapButton = document.querySelector("#map-button")
    this.chartButton = document.querySelector('#chart-button')

    this.bottomTabs = new TabManager(bottomViews);
}

  bindEvents(){
    // this.topTabs.toggle('list');
    // console.log('Bind events works')
    this.bottomTabs.toggle('map');
    this.setupButtonListeners()
  }

  setupButtonListeners(){
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
