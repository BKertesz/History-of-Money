const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

class Items {
  constructor(url) {
    this.url = url;
  }

  bindEvents(){
    this.setupItemClickedListener();
  }

  getData(){
    const request = new Request(this.url);
    request.get()
    .then((items) => {
      PubSub.publish('Items:all-data-ready', items);
    })
    .catch(console.error);
  };

  setupItemClickedListener(){
    PubSub.subscribe('ItemListView:item-selected',(evt)=>{ this.getItemData(evt.detail)
    })
  }

  getItemData(itemId){
    const request = new Request(`http://localhost:3000/api/items/${itemId}`);
    request.get().then((item)=>{
      // console.log("Item",item);
      PubSub.publish('Items:item-data-loaded',item);
    })
  }
}







module.exports = Items;
