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

      const itemRow = document.createElement('p')
      itemRow.textContent = item.name;

      const year = document.createElement('li')
      year.textContent = item.time;

      const image = document.createElement('img')
      image.src = item.image_url;
      image.id = 'timeline-image';

      // itemRow.value = item._id;
      itemRow.id = item._id
      // console.log('Item id',item._id)
      // console.log('Item row id',itemRow.id)

      itemRow.addEventListener('click',(evt)=>{this.handleClick(evt)});

      fullList.appendChild(year);
      year.appendChild(itemRow);
      year.appendChild(image);
      // itemHighlight.appendChild(year);

      // itemHighlight.appendChild(year);
      // itemHighlight.appendChild(itemRow);
      // itemHighlight.appendChild(image);
      // fullList.appendChild(itemHighlight);
    })
    //We add the list to the existing html element
    this.view.appendChild(fullList);
  }

  handleClick(evt){
    //This function passes data back to the model, what item's details to display
    PubSub.publish('ItemListView:item-selected',evt.target.id);
    // console.log(evt.target.innerText);
    // console.log(evt.target.id);
  }



}

module.exports = ItemListView;
