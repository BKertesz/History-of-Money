const PubSub = require('../helpers/pub_sub.js');

//This view appers at the bottom of the page and displays invidual details
class ItemDetailView {
  constructor(view) {
    this.view = view;
  }

  bindEvents(){
    this.setupDataListener();
  }

  //Looks out for when the data is ready to be displayed
  setupDataListener(){
    PubSub.subscribe('Items:item-data-loaded', (evt) => {
      this.render(evt.detail);
    })
  }

  //Renders all the details of the object that it pulls from the database
  render(item){
    //Emptys the html soo it doesn't just append to it
    this.view.innerHTML= ''
    //This part is for the name of the item
    const name = document.createElement('h2');
    name.textContent = item.name;
    this.view.appendChild(name);
    //This part is for the time period the item is from
    const time = document.createElement('h3');
    time.textContent = `Time Period:${item.time}`;
    this.view.appendChild(time);
    //Region of the item
    const region = document.createElement('h3');
    region.textContent = `Region:${item.region}`;
    this.view.appendChild(region);
    //An example image of the item or event
    const image = document.createElement('img');
    image.src = item.image_url;
    image.id = 'detail-image'
    this.view.appendChild(image);
    //This is just a dynamic html element creation, necessary because of the loading
    const descriptionTitle = document.createElement('h3');
    descriptionTitle.textContent = 'Description'
    this.view.appendChild(descriptionTitle);
    //The description of the item
    const description = document.createElement('p');
    description.textContent = item.description;
    this.view.appendChild(description);

  }

}





module.exports = ItemDetailView;
