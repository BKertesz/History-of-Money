const PubSub = require('../helpers/pub_sub.js');

class ItemDetailView {
  constructor(view) {
    this.view = view;
  }

  bindEvents(){
    this.setupDataListener();
  }

  setupDataListener(){
    PubSub.subscribe('Items:item-data-loaded', (evt) => {
      this.render(evt.detail);
    })
  }

  render(item){

    this.view.innerHTML= ''
    const name = document.createElement('h2');
    name.textContent = item.name;
    this.view.appendChild(name);

    const time = document.createElement('h3');
    time.textContent = item.time;
    this.view.appendChild(time);

    const region = document.createElement('h3');
    region.textContent = item.region;
    this.view.appendChild(region);

    const description = document.createElement('h4');
    description.textContent = item.description;
    this.view.appendChild(description);

  }

}





module.exports = ItemDetailView;
