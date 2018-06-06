const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');
//This class is responsible for handling data between the api db and the views//
class Items {
  constructor(url) {
    this.url = url;
  }

  bindEvents(){
    this.setupItemClickedListener();
  }

  //Grabs and loads data from the api
  getData(){
    const request = new Request(this.url);
    request.get()
    .then((items) => {
      PubSub.publish('Items:all-data-ready', items);
    })
    .catch(console.error);
  };

  //Has a listener when the one of the timeline/list objects is clicked
  setupItemClickedListener(){
    PubSub.subscribe('ItemListView:item-selected',(evt)=>{ this.getItemData(evt.detail)
    })
  }

  //Loads back one item for the details view to display
  getItemData(itemId){
    const request = new Request(`http://localhost:3000/api/items/${itemId}`);
    request.get().then((item)=>{
      PubSub.publish('Items:item-data-loaded',item);
    })
  }
}




module.exports = Items;
