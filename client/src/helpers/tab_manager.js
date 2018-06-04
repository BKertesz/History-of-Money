class TabManager{

  constructor(options){
    this.options = options;
    // this.printPropertys();
    this.hideAll();
  }

  printPropertys(){
    for(const item in this.options){
      console.log(item,this.options[item]);
    }
  }

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

  hide(view){
    const item = document.querySelector(this.options[view]);
    item.style.display = 'none';
  }

  show(view){
    const item = document.querySelector(this.options[view]);
    item.style.display = 'inline';
  }


}


module.exports = TabManager;
