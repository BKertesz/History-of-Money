const TabManager = require('../helpers/tab_manager.js');
const PubSub = require('../helpers/pub_sub.js')

class TabsView{
  constructor(){

    // const topViews = {
    //   "list":"#item-list-view",
    //   "timeline":"#item-timeline"
    // }

    const bottomViews = {
      "detail":"#item-detail-view",
      "chart":"#chart-container"
    }

    // this.button1 = document.querySelector('#timeline-or-list')
    this.button2 = document.querySelector('#detail-or-chart')

    // this.topTabs = new TabManager(topViews);
    this.bottomTabs = new TabManager(bottomViews);

  }

  bindEvents(){
    // this.topTabs.toggle('list');
    console.log('Bind events works')
    this.bottomTabs.toggle('detail');
    this.setupButtonListeners()
  }

  setupButtonListeners(){
    // this.button1.addEventListener('click',(event)=>{
    //   // console.log('List is ',this.topTabs.isHidden('list'));
    //   // console.log('Timeline is',this.topTabs.isHidden('timeline'))
    //   if(this.topTabs.isHidden('list')){
    //     this.topTabs.toggle('list')
    //   }
    //   else{
    //     this.topTabs.toggle('timeline')
    //   }
    // })

    this.button2.addEventListener('click',(event)=>{
      console.log('This button been pressed two...')
      if(this.bottomTabs.isHidden('detail')){
        this.bottomTabs.toggle('detail')
      }
      else{
        this.bottomTabs.toggle('chart')
      }
    })
  }








}

module.exports = TabsView;
