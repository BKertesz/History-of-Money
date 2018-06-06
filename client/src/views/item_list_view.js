const PubSub = require('../helpers/pub_sub.js');

//This class is responsible for the timeline and all of its events
class ItemListView{

  constructor(view){
    this.view = view;
  }

  bindEvents(){
    this.setupDataListener()
  }

  //Looks when the database is ready and published out the data
  setupDataListener(){
    PubSub.subscribe('Items:all-data-ready',(evt)=>{
      this.populate(evt.detail)})
  }

  //Sets up the elements on the timeline
  populate(items){
    //First we create an empty element where other parts will sit in
    const fullList = document.createElement('div')
    fullList.id = 'full-list'

    items.forEach((item)=>{
      //The itemHighlight is the invidual clickable holder for the timeline elements
      const itemHighlight = document.createElement('ul')
      itemHighlight.id = 'item-highlight'
      //The name of the object
      const itemName = document.createElement('p')
      itemName.textContent = item.name;
      //The year where is it from
      const year = document.createElement('li')
      year.textContent = item.time;
      //A visual representation of an item on the timeline
      const image = document.createElement('img')
      image.src = item.image_url;
      image.id = 'timeline-image';
      //This id makes the /:id route accessible by giving the container a unique id
      itemHighlight.id = item._id;

      //Make the whole container clickable, here the => doesn't work
      //The reason being the this would refer to the view itself and not the itemHighlight
      itemHighlight.addEventListener('click', function(event) {
        PubSub.publish('ItemListView:item-selected',this.id);
      })

      //Here we add everything in order to the itemHighlight
      itemHighlight.appendChild(year);
      itemHighlight.appendChild(itemName);
      itemHighlight.appendChild(image);


      //Here we add the full itemHighlight to the timeline
      fullList.appendChild(itemHighlight);
    })
    //We add the list to the existing html element and the timeline becames complete
    this.view.appendChild(fullList);
  }




}

module.exports = ItemListView;
