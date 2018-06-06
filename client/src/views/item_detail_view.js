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

    const detailInfoDiv = document.createElement('div');
    detailInfoDiv.id = 'detail-info-div';
    const imageInfoDiv = document.createElement('div');
    imageInfoDiv.id = 'image-info-div';
    const descriptionInfoDiv = document.createElement('div');
    descriptionInfoDiv.id = 'description-info-div';
    this.view.appendChild(detailInfoDiv);
    this.view.appendChild(imageInfoDiv);
    this.view.appendChild(descriptionInfoDiv);

    const name = document.createElement('h2');
    name.textContent = item.name;
    detailInfoDiv.appendChild(name);

    const time = document.createElement('h3');
    time.textContent = `Time Period: ${item.time}`;
    detailInfoDiv.appendChild(time);

    const region = document.createElement('h3');
    region.textContent = `Region: ${item.region}`;
    detailInfoDiv.appendChild(region);

    const image = document.createElement('img');
    image.src = item.image_url;
    image.id = 'detail-image'
    imageInfoDiv.appendChild(image);

    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = 'Description'
    descriptionInfoDiv.appendChild(descriptionTitle);

    const description = document.createElement('p');
    description.textContent = item.description;
    descriptionInfoDiv.appendChild(description);

  }

}





module.exports = ItemDetailView;
