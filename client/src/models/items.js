const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

class Items {
  constructor(url) {
    this.url = url;
  }

  bindEvents(){

  }

  getData(){
    const request = new Request(this.url);
    request.get()
    .then((items) => {
      PubSub.publish('Items:all-data-ready', items);
    })
    .catch(console.error);
  };
}







module.exports = Items;
