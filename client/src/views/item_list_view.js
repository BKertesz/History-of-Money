const PubSub = require('../helpers/pub_sub.js');

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
    const fullList = document.createElement('ul')
    items.forEach((item)=>{

      const itemRow = document.createElement('li')
      itemRow.textContent = item.name;

      itemRow.addEventListener('click',(evt)=>{this.handleClick(evt)});

      fullList.appendChild(itemRow);
    })
    //We add the list to the existing html element
    this.view.appendChild(fullList);
  }

  handleClick(evt){
    //This function passes data back to the model, what item's details to display
    PubSub.publish('ItemListView:item-selected',evt.target.name.value)
  }



}

module.exports = ItemListView;
