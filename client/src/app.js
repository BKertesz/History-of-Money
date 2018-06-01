const ItemListView = require('./views/item_list_view.js');
const Items = require('./models/items.js');
const ItemDetailView = require('./views/item_detail_view.js');

document.addEventListener('DOMContentLoaded', () => {
    const itemDetailDOM = document.querySelector('#item-detail-view');
    const itemListDOM = document.querySelector('#item-list-view');
    const itemListView = new ItemListView(itemListDOM);
    const itemDetailView = new ItemDetailView(itemDetailDOM);

    const url = 'http://localhost:3000/api/items'
    const items = new Items(url);

    itemDetailView.bindEvents();
    itemListView.bindEvents();
    items.bindEvents();
    items.getData();

});
