const PubSub = require('../helpers/pub_sub.js');

//This view appers at the bottom of the page and displays invidual details
class ItemDetailView {
  constructor(view) {
    this.view = view;
  }

  bindEvents(){
    this.setupDataListener();
  }

  setupDataListener(){
    PubSub.subscribe('Items:item-data-loaded', (evt) => {
      // console.log("This is happening")
      this.render(evt.detail);
    })
  }

  render(item){

    this.view.innerHTML= ''
    const name = document.createElement('h2');
    name.textContent = item.name;
    this.view.appendChild(name);

    const time = document.createElement('h3');
    time.textContent = `Time Period:${item.time}`;
    this.view.appendChild(time);

    const region = document.createElement('h3');
    region.textContent = `Region:${item.region}`;
    this.view.appendChild(region);

    const image = document.createElement('img');
    image.src = item.image_url;
    image.id = 'detail-image'
    this.view.appendChild(image);

    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = 'Description'
    this.view.appendChild(descriptionTitle);

    const description = document.createElement('p');
    description.textContent = item.description;
    this.view.appendChild(description);

  }

}





module.exports = ItemDetailView;
