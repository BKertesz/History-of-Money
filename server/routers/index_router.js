const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const itemRouter = require('./items_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  const db = client.db('numismatics');
  const itemsCollection = db.collection('items');
  router.use('/api/items', itemRouter(itemsCollection));
});

module.exports = router;
