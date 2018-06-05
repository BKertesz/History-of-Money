const PubSub = require('../helpers/pub_sub.js');

//This class is responsible for handling views and clicks on the timeline
class ItemListView{

  constructor(view){
    this.view = view;
  }

  bindEvents(){
    this.setupDataListener()
  }

  setupDataListener(){
    //Listening till the model publishes all data then populate the story
    PubSub.subscribe('Items:all-data-ready',(evt)=>{
      this.populate(evt.detail)})
  }

  populate(items){
    //This function creates the invidual lines that are displayed in the list
    //We create an unordered list that we append each new row
    const fullList = document.createElement('div')
    fullList.id = 'full-list'

    items.forEach((item)=>{

      const itemHighlight = document.createElement('ul')
      itemHighlight.id = 'item-highlight'

      const itemName = document.createElement('p')
      itemName.textContent = item.name;

      const year = document.createElement('li')
      year.textContent = item.time;

      const image = document.createElement('img')
      image.src = item.image_url;
      image.id = 'timeline-image';

      itemHighlight.id = item._id;


      itemHighlight.addEventListener('click', function(event) {
        // console.log('This',this.id)
        PubSub.publish('ItemListView:item-selected',this.id);
      })


      itemHighlight.appendChild(year);
      itemHighlight.appendChild(itemName);
      itemHighlight.appendChild(image);



      fullList.appendChild(itemHighlight);
    })
    //We add the list to the existing html element
    this.view.appendChild(fullList);
  }




}

module.exports = ItemListView;
