const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const itemRouter = require('./items_router.js');

MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
  const db = client.db('heroku_cr2tj6df');
  const itemsCollection = db.collection('items');
  router.use('/api/items', itemRouter(itemsCollection));
});

module.exports = router;
