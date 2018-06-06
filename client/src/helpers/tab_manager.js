//This helper can hide and show different div elements dynamicaly
class TabManager{
  //To begin with it needs to have an object passed in with key value pairs
  constructor(options){
    this.options = options;
    this.hideAll();
  }
  //This is a test function for printing out all the keys and values
  printPropertys(){
    for(const item in this.options){
      console.log(item,this.options[item]);
    }
  }
  //This is the main function that could hide and show divs
  //Also makes sure one is shown and the others are hiden
  toggle(id){
    if(this.options[id]){
      // console.log('This id exist:',id)
      for(const item in this.options){
        if(item == id){
          this.show(item);
        }
        else{
          this.hide(item);
        }
      }
    }
    else{
      console.log("This id doesn't exist:",id)
    }
  }

  hideAll(){
    for(const item in this.options){
      this.hide(item);
    }
  }

  hide(id){
    const item = document.querySelector(this.options[id]);
    item.style.display = 'none';
  }

  show(id){
    const item = document.querySelector(this.options[id]);
    if(id == 'detail'){
      item.style.display = 'flex'
    }
    else{
      item.style.display = 'block';
    }

  }

  isHidden(id){
    const item = document.querySelector(this.options[id]);
    if(item.style.display == 'none'){
      return true;
    }
    else{
      return false
    }
  }


}


module.exports = TabManager;
