const ItemListView = require('./views/item_list_view.js');
const Items = require('./models/items.js');

document.addEventListener('DOMContentLoaded', () => {
    const itemListDOM = document.querySelector('#item-list-view');
    const itemListView = new ItemListView(itemListDOM);
    const url = 'http://localhost:3000/api/items'
    const items = new Items(url);


    itemListView.bindEvents();
    items.bindEvents();
    items.getData();

});
