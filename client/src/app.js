const ItemListView = require('./views/item_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
    const itemListDOM = document.querySelector('#item-list-view');
    const itemListView = new ItemListView(itemListDOM);
    itemListView.bindEvents();

});
